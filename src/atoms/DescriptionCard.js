import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export function DescriptionCard({children}) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
