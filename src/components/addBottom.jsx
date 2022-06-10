import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string, shape, number } from 'prop-types';
import { defaultProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

import Icon from './icon';

export default function AddBottom(props) {
  const { style, name, size } = props;
  return (
    <View style={[styles.addBottom, style]}>
      <Icon name="plus" size={40} color="white" />
    </View>
  );
}

AddBottom.propTypes = {
  style: shape(),
  name: string.isRequired,
  size: number,
};

AddBottom.defaultProps = {
  style: null,
  size: 25,
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
