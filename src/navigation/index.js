import React from 'react';
import {PostsProvider} from './PostsProvider';
import Routes from './Routes';
export default function Providers() {
  return (
    <PostsProvider>
      <Routes />
    </PostsProvider>
  );
}
