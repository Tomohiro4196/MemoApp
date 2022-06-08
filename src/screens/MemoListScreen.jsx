import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import MemoList from '../components/Memolist';
import AddBottom from '../components/addBottom';

export default function MemoListScr() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <AddBottom name="plus" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
