import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MainHeader, Post } from '../components';

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader label={'Hiyvee.'} />
      <Post />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});