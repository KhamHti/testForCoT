import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const SettingsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      {/* Content Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { flexGrow: 1, flexShrink: 0, marginLeft: 24, marginRight: 24 },
          dimensions.width
        )}
      >
        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'Feather/flag'}
                size={24}
              />
              <Text
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'Country'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'MaterialIcons/chevron-right'}
                size={24}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.divider}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>

        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'FontAwesome/dollar'}
                size={24}
              />
              <Text
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'Currency'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'MaterialIcons/chevron-right'}
                size={24}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.divider}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>

        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'Entypo/language'}
                size={24}
              />
              <Text
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontSize: 14,
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'Language'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'MaterialIcons/chevron-right'}
                size={24}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.divider}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>

        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'AntDesign/infocirlce'}
                size={24}
              />
              <Text
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'About'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.strong}
                name={'MaterialIcons/chevron-right'}
                size={24}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.divider}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>
      </View>
      {/* Footer Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { flexGrow: 1, flexShrink: 0 },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('AuthNavigator');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Button Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                justifyContent: 'center',
                minHeight: 54,
              },
              dimensions.width
            )}
          >
            {/* Sign Out Text */}
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors.primary, textAlign: 'center' },
                dimensions.width
              )}
            >
              {'Sign Out'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SettingsScreen);
