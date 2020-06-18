import {colors} from '@styles/colors';
import {StyleSheet} from 'react-native';

export const fontSizes = {
  small: 17,
  large: 30,
};

const defaultStyle = StyleSheet.create({
  base: {fontSize: fontSizes.small, color: colors.white},
});

const header = StyleSheet.create({
  base: {fontSize: fontSizes.large, color: colors.white, fontWeight: 'bold'},
});

const bold = StyleSheet.create({
  base: {fontSize: fontSizes.small, color: colors.white, fontWeight: 'bold'},
});

export const fonts = {
  default: defaultStyle.base,
  header: header.base,
  bold: bold.base,
};
