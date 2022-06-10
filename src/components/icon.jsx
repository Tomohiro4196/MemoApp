import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { useFonts } from '@use-expo/font';

import { string, number, oneOf } from 'prop-types';
import icomoon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection.json';

export default function Icon(props) {
  const [fontLoaded] = useFonts({ icomoon });
  // fontLoaded = アイコンが読み込まれたか否か（boolean値が返ってくる）
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);
  if (!fontLoaded) {
    // !fontLoaded = fontLoadedがfalseの場合
    return null;
  }
  return <CustomIcon name={name} size={size} color={color} style={{ lineHeight: size - 1 }} />;
  // style={{ lineHeight: size - 1 }} => Android側のアイコンが中心から少しずれるため修正用コード
}

Icon.propTypes = {
  // oneOf = 指定の配列からのみ値を受け取る
  name: oneOf(['plus', 'delete', 'check', 'pencil']).isRequired,
  size: number,
  color: string,
};

Icon.defaultProps = {
  size: 24,
  color: 'black',
};
