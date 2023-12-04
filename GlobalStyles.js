import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const SVGStyles = theme =>
  StyleSheet.create({ SVG: { height: 100, width: 100 } });

export const ImageStyles = theme =>
  StyleSheet.create({ Image: { height: 100, width: 100 } });

export const TextStyles = theme =>
  StyleSheet.create({ Text: { color: theme.colors.strong } });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const CheckboxRowStyles = theme =>
  StyleSheet.create({ 'Checkbox Row': { minHeight: 50 } });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });
