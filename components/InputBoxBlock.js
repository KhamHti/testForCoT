import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { TextInput, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const InputBoxBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          margin: 20,
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          padding: 10,
          paddingLeft: 5,
        },
        dimensions.width
      )}
    >
      <TextInput
        allowFontScaling={true}
        autoCapitalize={'none'}
        changeTextDelay={500}
        onChangeText={newTextInputValue => {
          const textInputValue = newTextInputValue;
          try {
            setTextInputValue(newTextInputValue);
          } catch (err) {
            console.error(err);
          }
        }}
        placeholder={'Enter a value...'}
        style={StyleSheet.applyWidth(
          GlobalStyles.TextInputStyles(theme)['Text Input'],
          dimensions.width
        )}
        value={textInputValue}
      />
    </View>
  );
};

export default withTheme(InputBoxBlock);
