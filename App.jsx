import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoList from './src/components/Memolist';
import AddBottom from './src/components/addBottom';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />

      <MemoList />

      <AddBottom>+</AddBottom>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
