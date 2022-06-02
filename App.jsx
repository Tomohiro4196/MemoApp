import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appBarInner}>
          <Text style={styles.appBarTitle}>Memo App</Text>
          <Text style={styles.appBarLogout}>Log put</Text>
        </View>
      </View>

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

      <View style={styles.addBottom}>
          <Text style={styles.addBottomLabel}>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },

  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },

  appBarInner: {
    alignItems: 'center',
  },

  appBarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: 'white',
    fontWeight: 'bold',
  },

  appBarLogout: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'white',
  },

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

  addBottom: {
    backgroundColor: 'skyblue',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },

  addBottomLabel: {
    color: 'white',
    fontSize: 40,
    lineHeight: 40,
  },
});
