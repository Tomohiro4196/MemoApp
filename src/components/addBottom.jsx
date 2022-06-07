import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';
import { defaultProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function AddBottom(props) {
  const { children, style } = props;
  return (
    <View style={[styles.addBottom, style]}>
      <Text style={styles.addBottomLabel}>{ children }</Text>
    </View>
  );
}

AddBottom.propTypes = {
  children: string.isRequired,
  style: shape(),
};

AddBottom.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  addBottom: {
    backgroundColor: '#467FD3',
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
