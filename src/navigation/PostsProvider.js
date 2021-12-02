import React, {createContext, useState} from 'react';

export const PostsContext = createContext({});

export const PostsProvider = ({children}) => {
  const post = {
    id: null,
    title: '',
    description: '',
  };
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext.Provider
      value={{
        post,
        posts,
        save: post => {
          let arr = [...posts];
          let foundIndex = arr.findIndex(x => x.id == post.id);
          arr[foundIndex].title = post.title;
          arr[foundIndex].description = post.description;
          setPosts(arr);
        },
        removePost: id => {
          let arr = posts;
          console.log(arr);
          const result = arr.filter(post => {
            if (post.id != id) {
              return post;
            }
          });
          console.log(result);
          setPosts(result);
        },
        createPost: post => {
          if (!posts.length == 0) {
            // let arr = posts;
            let lastPost = posts[posts.length - 1];
            post.id = lastPost.id + 1;
            // arr.push(post);
            setPosts(posts => [...posts, post]);
          } else {
            post.id = 1;
            setPosts(prevPosts => [...prevPosts, post]);
          }
        },
      }}>
      {children}
    </PostsContext.Provider>
  );
};
