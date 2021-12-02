import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {HeadingCard, DescriptionCard, CreateButton} from '../atoms';
import {windowWidth} from '../utils/Dimensions';

export function PostCard({id, title, description, pressed}) {
  return (
    <TouchableOpacity onPress={() => pressed()}>
      <View style={styles.card} key={id}>
        <HeadingCard>{title}</HeadingCard>
        <DescriptionCard>{description}</DescriptionCard>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: windowWidth * 0.9,
    flexWrap: 'wrap',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
