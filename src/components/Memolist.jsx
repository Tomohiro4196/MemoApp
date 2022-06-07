import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MemoList() {
  return (
    <View>

      <View style={styles.MemoListItem}>
        <View>
          <Text style={styles.MemoListTitle}>買い物リスト</Text>
          <Text style={styles.MemoListDate}>2022/06/02 14:40</Text>
        </View>
        <View>
          <Text>x</Text>
        </View>
      </View>

      <View style={styles.MemoListItem}>
        <View>
          <Text style={styles.MemoListTitle}>買い物リスト</Text>
          <Text style={styles.MemoListDate}>2022/06/02 14:40</Text>
        </View>
        <View>
          <Text>x</Text>
        </View>
      </View>

      <View style={styles.MemoListItem}>
        <View>
          <Text style={styles.MemoListTitle}>買い物リスト</Text>
          <Text style={styles.MemoListDate}>2022/06/02 14:40</Text>
        </View>
        <View>
          <Text>x</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  MemoListItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 15)',
  },

  MemoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },

  MemoListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: 'grey',
  },

  MemoItemDelete: {
  },

});
