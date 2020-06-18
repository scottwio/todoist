import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '@styles/colors';
import {spacing} from '@styles/spacing';

type CheckMarkProps = {
  checked: boolean;
  onPress: () => void;
};

export const CheckMark = ({checked, onPress}: CheckMarkProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID="todo-check-mark"
      style={styles.btn}>
      <View>
        {checked && <View style={styles.checked} />}
        <View style={styles.checkMark} />
      </View>
    </TouchableOpacity>
  );
};

const checkSize = 24;
const reduceBy = 10;
const checkSizeInner = checkSize - reduceBy;

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    alignContent: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    top: -18,
  },
  checkMark: {
    borderColor: colors.white,
    paddingRight: spacing.default,
    borderWidth: 2,
    borderRadius: checkSize,
    height: checkSize,
    width: checkSize,
  },
  checked: {
    position: 'absolute',
    top: reduceBy / 2,
    left: reduceBy / 2,
    backgroundColor: colors.white,
    borderRadius: checkSizeInner,
    height: checkSizeInner,
    width: checkSizeInner,
  },
});
