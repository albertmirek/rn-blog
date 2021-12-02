import React, {useContext} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import {PostsContext} from '../navigation/PostsProvider';
import {windowWidth} from '../utils/Dimensions';
import {PostsList} from '../organisms';

export function HomeScreen({navigation}) {
  const {posts} = useContext(PostsContext);

  return (
    <SafeAreaView style={styles.contrainer}>
      <Text style={styles.header}>HomeScreen</Text>
      <PostsList navigation={navigation} posts={posts} />
      <View style={{position: 'absolute', bottom: 0, width: windowWidth}}>
        <Button
          title="+ CREATE NEW POST"
          onPress={() => navigation.navigate('Create')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    alignSelf: 'center',
  },
});
