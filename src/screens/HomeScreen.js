import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PostsContext} from '../navigation/PostsProvider';
import {windowHeight, windowWidth} from '../utils/Dimensions';

import {PostsList} from '../organisms';

export default function HomeScreen({navigation}) {
  const {posts, setPosts} = useContext(PostsContext);

  return (
    <View>
      <View>
        <Text>HomeScreen</Text>
        <PostsList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
  },
});
