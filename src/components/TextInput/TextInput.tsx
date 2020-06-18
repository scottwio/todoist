import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from 'react-native';
import {colors} from '@styles/colors';
import {fontSizes} from '@styles/fonts';

type TextInputProps = {} & RNTextInputProps;

export const TextInput = (props: TextInputProps) => {
  return <RNTextInput style={[styles.input, props.style]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    color: colors.white,
    fontSize: fontSizes.small,
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
});
