import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Divider, ScreenContainer, withTheme } from '@draftbit/ui';
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
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Referafriend}
          style={StyleSheet.applyWidth(
            GlobalStyles.ImageStyles(theme)['Image'],
            dimensions.width
          )}
        />
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text'],
            dimensions.width
          )}
        >
          {'Invite your friends to CoTruck App\n'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          allowFontScaling={true}
          ellipsizeMode={'middle'}
          numberOfLines={3}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text'],
            dimensions.width
          )}
        >
          {
            'Refer the code with your friend and ask them to join to get special offer on your next ride.'
          }
        </Text>
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
    </ScreenContainer>
  );
};

export default withTheme(ReferToFriendScreen);
