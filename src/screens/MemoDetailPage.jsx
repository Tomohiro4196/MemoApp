import React from 'react';
// eslint-disable-next-line object-curly-newline
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import AddBottom from '../components/addBottom';
import AppBar from '../components/AppBar';

export default function MemoDetailPage() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View>
        <View style={styles.MemoHeader}>
          <Text style={styles.MemoTitle}>買い物リスト</Text>
          <Text style={styles.MemoDate}>2022/06/02 14:40</Text>
        </View>
        <View style={styles.Memobody}>
          <Text style={styles.Memotext}>
            買い物リスト
            書体やレイアウトなどを確認するために用います。
            本文用なので使い方を間違えると不自然に見えることもありますので要注意。
          </Text>
          <ScrollView />
        </View>
      </View>

      <AddBottom style={{ top: 160, bottom: 'auto' }} name="edit-2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  MemoHeader: {
    paddingVertical: 24,
    paddingHorizontal: 19,
    height: 96,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
  },

  MemoTitle: {
    color: 'white',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },

  MemoDate: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16,
  },

  Memobody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },

  Memotext: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },

});
