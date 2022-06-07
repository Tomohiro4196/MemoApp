import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function AddBottom(props) {
  const { children } = props;
  return (
    <View style={styles.addBottom}>
      <Text style={styles.addBottomLabel}>{ children }</Text>
    </View>
  );
}

AddBottom.propTypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  addBottom: {
    backgroundColor: 'skyblue',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
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
