import React, {useRef, ReactNode} from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {fonts} from '@styles/fonts';

type TextStyle = 'default' | 'heading' | 'bold';
type TextProps = {
  textStyle?: TextStyle;
  children: ReactNode;
} & RNTextProps;

export const Text = (props: TextProps) => {
  var style = useRef(getColor());

  function getColor() {
    switch (props.textStyle) {
      case 'heading':
        return fonts.header;
      case 'bold':
        return fonts.bold;
      default:
        return fonts.default;
    }
  }

  return <RNText {...props} style={[style.current, props.style]} />;
};
