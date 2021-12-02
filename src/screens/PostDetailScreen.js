import React, {useState, useContext} from 'react';
import {StyleSheet, View, Button} from 'react-native';

import {PostsContext} from '../navigation/PostsProvider';
import {HeadingPost, TextPost} from '../atoms';

export function PostDetailScreen({navigation, route}) {
  const {removePost, save, post} = useContext(PostsContext);
  const {id, title, description} = route.params;

  const [heading, setHeading] = useState(title);
  const [text, setText] = useState(description);

  const onSaveHandler = (id, heading, text) => {
    const object = Object.create(post);
    object.id = id;
    object.title = heading;
    object.description = text;
    save(object);
    navigation.navigate('Home');
  };
  const onDeleteHandler = id => {
    removePost(id);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.contrainer}>
      <View style={styles.inputContainer}>
        <HeadingPost heading={title} onChange={title => setHeading(title)} />
        <TextPost text={description} onChange={text => setText(text)} />
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Delete"
          color="red"
          onPress={() => onDeleteHandler(route.params.id)}
        />
        <Button title="Save" onPress={() => onSaveHandler(id, heading, text)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
  },
  contrainer: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    fontSize: 25,
    alignSelf: 'center',
  },
  inputContainer: {
    flex: 0.5,
    justifyContent: 'space-evenly',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
