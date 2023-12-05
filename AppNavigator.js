import * as React from 'react';
import {
  I18nManager,
  Platform,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import CheckEstimationsScreen from './screens/CheckEstimationsScreen';
import HelpAndSupportScreen from './screens/HelpAndSupportScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RecipientAddressScreen from './screens/RecipientAddressScreen';
import ReferToFriendScreen from './screens/ReferToFriendScreen';
import SettingsScreen from './screens/SettingsScreen';
import TrackingDetailsScreen from './screens/TrackingDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerRight: ({ tintColor }) => (
          <View style={[styles.headerContainer, styles.headerContainerRight]}>
            <Icon
              name="FontAwesome/bell"
              size={Platform.OS === 'ios' ? 21 : 24}
              color={tintColor}
              style={[styles.headerIcon, styles.headerIconRight]}
            />
          </View>
        ),
        headerShown: true,
        tabBarActiveTintColor: theme.colors['Primary'],
        tabBarInactiveTintColor: theme.colors.textPlaceholder,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: { borderTopColor: 'transparent' },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/home"
              size={25}
              color={
                focused ? theme.colors['Primary'] : theme.colors.textPlaceholder
              }
            />
          ),
          tabBarLabel: 'Home',
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="ReferToFriendScreen"
        component={ReferToFriendScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/share"
              size={25}
              color={
                focused ? theme.colors['Primary'] : theme.colors.textPlaceholder
              }
            />
          ),
          tabBarLabel: 'Refer a Friend',
          title: 'Refer To Friend',
        }}
      />
      <Tab.Screen
        name="HelpAndSupportScreen"
        component={HelpAndSupportScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/questioncircleo"
              size={25}
              color={
                focused ? theme.colors['Primary'] : theme.colors.textPlaceholder
              }
            />
          ),
          tabBarLabel: 'Help',
          title: 'Help & Support',
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/ios-settings-outline"
              size={25}
              color={
                focused ? theme.colors['Primary'] : theme.colors.textPlaceholder
              }
            />
          ),
          tabBarLabel: 'Settings',
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecipientAddressScreen"
        component={RecipientAddressScreen}
        options={{
          title: 'Recipient Address',
        }}
      />
      <Stack.Screen
        name="TrackingDetailsScreen"
        component={TrackingDetailsScreen}
        options={{
          title: 'Tracking Details',
        }}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        initialRouteName="AuthNavigator"
        screenOptions={{
          headerBackImage: ({ tintColor }) => (
            <Icon
              name="AntDesign/arrowleft"
              size={Platform.OS === 'ios' ? 21 : 24}
              color={tintColor}
              style={[styles.headerIcon, styles.headerIconLeft]}
            />
          ),
          headerRight: ({ tintColor }) => (
            <View style={[styles.headerContainer, styles.headerContainerRight]}>
              <Icon
                name="FontAwesome/bell"
                size={Platform.OS === 'ios' ? 21 : 24}
                color={tintColor}
                style={[styles.headerIcon, styles.headerIconRight]}
              />
            </View>
          ),
          headerShown: false,
          headerTitleAlign: 'left',
          headerTitleAllowFontScaling: true,
        }}
      >
        <Stack.Screen
          name="CheckEstimationsScreen"
          component={CheckEstimationsScreen}
          options={{
            title: 'Check Estimations',
          }}
        />
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerRight: Platform.select({ ios: { marginRight: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
  headerIconRight: Platform.select({ ios: { marginLeft: 6 } }),
});
