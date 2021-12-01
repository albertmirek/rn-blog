import React, {createContext, useState} from 'react';

export const PostsContext = createContext({});

export const PostsProvider = ({children}) => {
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        update: post => {},
        delete: post => {},
      }}>
      {children}
    </PostsContext.Provider>
  );
};
