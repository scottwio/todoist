import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '@styles/colors';
import {spacing} from '@styles/spacing';
import {Text} from '@components/Text/Text';

type ButtonProps = {title: string} & TouchableOpacityProps;

export const Button = (props: ButtonProps) => (
  <TouchableOpacity {...props}>
    <View style={styles.button}>
      <Text textStyle="bold" style={styles.text}>
        {props.title}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 8,
    backgroundColor: colors.white,
    padding: spacing.default,
  },
  text: {
    color: colors.redDark,
  },
});
