import React from 'react';
import {
  View, StyleSheet, TextInput,
  // KeyboardAvoidingView = キーボードが出たときに、それをViewの大きさから除いてくれる
  // KeyboardAvoidingViewにバグが存在するので、Udemy作者が作った "KeyboardSafeView" で代用
} from 'react-native';

import AppBar from '../components/AppBar';
import AddBottom from '../components/addBottom';
import KeyboardSafeView from '../components/KeyboradSafeView';
// KeyboardAvoidingViewにバグが存在するので、Udemy作者が作った "KeyboardSafeView" で代用

export default function MemoCreateSrc() {
  return (
    <KeyboardSafeView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <AddBottom name="check" size={40} colo />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },

  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
