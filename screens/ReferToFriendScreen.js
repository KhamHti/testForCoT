import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Divider,
  ScreenContainer,
  Touchable,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { H4 } from '@expo/html-elements';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const ReferToFriendScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const DecreaseTopUpValue = topUpValue => {
    if (topUpValue < 1) return topUpValue;
    else return topUpValue - 1;
  };

  const IncreaseTopUpValue = topUpValue => {
    return topUpValue + 1;
  };

  const [selectedTopUpValue, setSelectedTopUpValue] = React.useState(50);
  const [topUpValue, setTopUpValue] = React.useState(100);

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
    >
      {/* My Balance View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Referafriend}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
              marginBottom: 15,
              marginTop: 15,
              position: 'relative',
            }),
            dimensions.width
          )}
        />
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontSize: 18,
              marginBottom: 10,
              marginTop: 10,
            }),
            dimensions.width
          )}
        >
          {'Invite your friends to CoTruck App\n'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            { marginLeft: 12, marginRight: 12 },
            dimensions.width
          )}
        >
          {/* Text 2 */}
          <Text
            accessible={true}
            allowFontScaling={true}
            ellipsizeMode={'middle'}
            numberOfLines={3}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontSize: 16,
                letterSpacing: 2,
                marginLeft: 8,
                marginRight: 8,
              }),
              dimensions.width
            )}
          >
            {
              'Refer the code with your friend and ask them to join to get special offer on your next ride.'
            }
          </Text>
        </View>
      </View>
      <Divider
        color={theme.colors['Light']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.DividerStyles(theme)['Divider'], {
            height: 2,
          }),
          dimensions.width
        )}
      />
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 10,
          },
          dimensions.width
        )}
      >
        <H4
          style={StyleSheet.applyWidth(
            GlobalStyles.H4Styles(theme)['H4'],
            dimensions.width
          )}
        >
          {'Share your Promo Code'}
        </H4>
      </View>

      <VStack
        style={StyleSheet.applyWidth(
          GlobalStyles.VStackStyles(theme)['V Stack'],
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              justifyContent: 'center',
              marginBottom: 10,
              marginTop: 10,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                borderColor: theme.colors['Secondary'],
                borderRadius: 10,
                borderStyle: 'dashed',
                borderWidth: 1,
                padding: 10,
                paddingBottom: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            {/* Refer Code */}
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Primary'],
                  fontSize: 18,
                  margin: 5,
                }),
                dimensions.width
              )}
            >
              {'aTo7MN\n'}
            </Text>
          </View>
        </View>
      </VStack>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            alignSelf: 'auto',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          },
          dimensions.width
        )}
      >
        <Touchable>
          <Image
            resizeMode={'contain'}
            source={Images.Facebook}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                borderRadius: 5,
                height: 50,
                width: 50,
              }),
              dimensions.width
            )}
          />
        </Touchable>
        {/* Touchable 2 */}
        <Touchable>
          {/* Image 2 */}
          <Image
            resizeMode={'contain'}
            source={Images.Instagram}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 50,
                width: 50,
              }),
              dimensions.width
            )}
          />
        </Touchable>
        {/* Touchable 3 */}
        <Touchable>
          {/* Image 3 */}
          <Image
            resizeMode={'contain'}
            source={Images.Twitter}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 50,
                width: 50,
              }),
              dimensions.width
            )}
          />
        </Touchable>
        {/* Touchable 4 */}
        <Touchable>
          {/* Image 4 */}
          <Image
            resizeMode={'contain'}
            source={Images.Whatsapp}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                borderRadius: 10,
                height: 50,
                width: 50,
              }),
              dimensions.width
            )}
          />
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ReferToFriendScreen);
