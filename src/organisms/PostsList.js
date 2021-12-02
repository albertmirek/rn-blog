import React from 'react';
import {ScrollView, Text} from 'react-native';
import {PostCard} from '../molecules';
export function PostsList({posts, navigation}) {
  const clickOptionHandler = post => {
    navigation.navigate('Post', {
      id: `${post.id}`,
      title: `${post.title}`,
      description: `${post.description}`,
    });
  };

  return (
    <ScrollView>
      {posts.length != 0 ? (
        posts.map(post => {
          return (
            <PostCard
              pressed={() => clickOptionHandler(post)}
              key={post.id}
              title={post.title}
              description={post.description}
            />
          );
        })
      ) : (
        <Text style={{alignSelf: 'center'}}>
          No posts yet. Head on and create some!
        </Text>
      )}
      {}
    </ScrollView>
  );
}
