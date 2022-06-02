import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello bang>World</Hello>
      <Hello bang style={{ fontSize: 16, backgroundColor: 'orange' }}>Tonny</Hello>
      {/* Viewタグ = HTMLでの"div"のようなもの */}
      <Text>Open up App.js to start working on your app!</Text>
      {/* "eslint-disable-next-line"でStatusBarを無効にしている */}
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
