import React, {useState, useContext} from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';
import {PostsContext} from '../navigation/PostsProvider';
import {HeadingPost, TextPost} from '../atoms';

export function CreatePostScreen({navigation, route}) {
  const {createPost, post, posts} = useContext(PostsContext);
  const [heading, setHeading] = useState('');
  const [text, setText] = useState('');

  const onCreateHandler = (heading, text) => {
    if (heading == '' || text == '') return createAlert();
    else {
      const object = Object.create(post);
      object.title = heading;
      object.description = text;
      createPost(object);
      console.log(object);

      navigation.navigate('Home');
    }
  };

  const createAlert = () => {
    Alert.alert('Empty Fields', 'Please fill in all empty inputs', [
      {
        text: 'OK',
        style: 'default',
      },
    ]);
  };

  return (
    <View style={styles.contrainer}>
      <View style={styles.inputContainer}>
        <HeadingPost onChange={title => setHeading(title)} />
        <TextPost onChange={text => setText(text)} />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Create" onPress={() => onCreateHandler(heading, text)} />
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
