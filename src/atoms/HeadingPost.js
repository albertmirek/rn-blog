import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {windowWidth} from '../utils/Dimensions';
export function HeadingPost({heading, onChange}) {
  return (
    <TextInput
      style={{
        height: 40,
        width: windowWidth,
        borderColor: 'gray',
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 30,
        fontSize: 18,
      }}
      defaultValue={heading}
      placeholder="Heading of post"
      onChangeText={text => onChange(text)}
    />
  );
}
