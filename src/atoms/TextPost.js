import React from 'react';
import {TextInput} from 'react-native';
import {windowWidth, windowHeight} from '../utils/Dimensions';
export function TextPost({text, onChange}) {
  return (
    <TextInput
      style={{
        width: windowWidth,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 12,
        height: windowHeight * 0.2,
      }}
      multiline
      numberOfLines={5}
      placeholder="Text of post ...."
      defaultValue={text}
      maxLength={windowHeight * 0.1}
      onChangeText={input => onChange(input)}
    />
  );
}
