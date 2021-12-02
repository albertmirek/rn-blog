import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, PostDetailScreen, CreatePostScreen} from '../screens';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Post" component={PostDetailScreen} />
      <Stack.Screen name="Create" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}
