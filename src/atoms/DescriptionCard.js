import React from 'react';
import {View, Text} from 'react-native';
export function DescriptionCard({children}) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
