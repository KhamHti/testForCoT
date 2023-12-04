import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  CheckboxRow,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const LoginScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Surface'], flex: 1 },
        dimensions.width
      )}
    >
      {/* ScreenContainer */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, marginBottom: 20, marginTop: 20 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              padding: 20,
            },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={Images.Icon}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 150,
                width: 150,
              }),
              dimensions.width
            )}
          />
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: 'rgba(0, 0, 0, 0)',
              justifyContent: 'space-around',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Login */}
          <Text
            accessible={true}
            adjustsFontSizeToFit={true}
            allowFontScaling={true}
            disabled={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: 'rgba(48, 48, 220, 0.71)',
                fontSize: 26,
                marginBottom: 10,
                marginLeft: 5,
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            {'Login'}
          </Text>
          {/* Please sing in to continue */}
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Medium'],
                fontSize: 18,
                marginBottom: 10,
                marginLeft: 5,
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            {'Please sign in to continue'}
          </Text>
        </View>
        {/* EmailInputBox */}
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
                setTextInputValue(textInputValue);
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
        {/* PasswordInputBox */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              flexDirection: 'column',
              justifyContent: 'space-between',
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
                setTextInputValue(textInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Enter a value...'}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                { marginRight: 0 }
              ),
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'column', paddingRight: 5 },
            dimensions.width
          )}
        >
          <CheckboxRow
            direction={'row-reverse'}
            label={'Remember Me'}
            onPress={newCheckboxRowValue => {
              const checkboxRowValue = newCheckboxRowValue;
              try {
                setCheckboxRowValue(newCheckboxRowValue);
              } catch (err) {
                console.error(err);
              }
            }}
            status={checkboxRowValue}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'],
                { textAlign: 'auto' }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* ButtonContainer */}
        <View
          style={StyleSheet.applyWidth(
            {
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            },
            dimensions.width
          )}
        >
          <Button
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                marginLeft: 10,
                marginRight: 10,
              }),
              dimensions.width
            )}
            title={'Log In'}
          />
        </View>
        {/* AuthFooter */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            allowFontScaling={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                marginRight: 5,
              }),
              dimensions.width
            )}
          >
            {'English\n'}
          </Text>

          <Touchable
            onPress={() => {
              console.log('Touchable ON_PRESS Start');
              let error = null;
              try {
                console.log('Start ON_PRESS:0 NAVIGATE');
                navigation.navigate('BottomTabNavigator');
                console.log('Complete ON_PRESS:0 NAVIGATE');
              } catch (err) {
                console.error(err);
                error = err.message ?? err;
              }
              console.log(
                'Touchable ON_PRESS Complete',
                error ? { error } : 'no error'
              );
            }}
            style={StyleSheet.applyWidth({ marginLeft: 5 }, dimensions.width)}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Primary'],
                }),
                dimensions.width
              )}
            >
              {'Change Language'}
            </Text>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
