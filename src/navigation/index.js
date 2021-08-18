import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  HomeScreen,
  LoginScreen,
  ForgotPassScreen,
  SignUpScreen,
  DashBoardScreen,
  MoreScreen,
  PrayerScreen,
  EventScreen,
  ProfileScreen,
  SettingScreen,
  OnBoardingScreen,
  OtpScreen,
  EventDetailScreen,
  ServiceScreen,
  ServiceDetaiScreen,
  AnnounceScreen,
  AnnounceDetail,
  LiveStreamScreen,
  ChangePassword,
  ContactUsScreen,
  EditProfileScreen,
  QiblaScreen,
  QuranScreen,
  QuranTransScreen,
  HadeesScreen,
  AskImamScreen,
} from '../screen';

import CustomTabBar from '../component/CustomTabBar';
import CONSTANT from '../constants';

const Tab = createBottomTabNavigator();

const serviceStack = createStackNavigator();
const servStack = () => {
  return (
    <serviceStack.Navigator
      headerMode="none"
      initialRouteName={CONSTANT.App.screenNames.MoreScreen}>
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.MoreScreen}
        component={MoreScreen}
      />
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.services}
        component={ServiceScreen}
      />
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.SettingScreen}
        component={SettingScreen}
      />
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.ChangePassword}
        component={ChangePassword}
      />
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.ProfileScreen}
        component={ProfileScreen}
      />
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.ContactUs}
        component={ContactUsScreen}
      />
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.EditProfile}
        component={EditProfileScreen}
      />
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.QiblaScreen}
        component={QiblaScreen}
      />
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.QuranScreen}
        component={QuranScreen}
      />
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.QuranTransScreen}
        component={QuranTransScreen}
      />
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.HadeesScreen}
        component={HadeesScreen}
      />
      <serviceStack.Screen
        name={CONSTANT.App.screenNames.AskImamScreen}
        component={AskImamScreen}
      />
    </serviceStack.Navigator>
  );
};

const bottomStack = createStackNavigator();
const homeBottomTab = () => {
  return (
    <bottomStack.Navigator
      headerMode="none"
      tabBarOptions={{keyboardHidesTabBar: true}}
      initialRouteName={CONSTANT.App.screenNames.home}>
      <bottomStack.Screen
        name={CONSTANT.App.screenNames.home}
        component={HomeScreen}
      />
      <bottomStack.Screen
        name={CONSTANT.App.screenNames.Announce}
        component={AnnounceScreen}
      />
      <bottomStack.Screen
        name={CONSTANT.App.screenNames.AnnounceDetail}
        component={AnnounceDetail}
      />
      <bottomStack.Screen
        name={CONSTANT.App.screenNames.event}
        component={EventScreen}
      />
      <bottomStack.Screen
        name={CONSTANT.App.screenNames.liveStream}
        component={LiveStreamScreen}
      />
    </bottomStack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="home"
        component={homeBottomTab}
        options={{
          tabBarIcon: () => <Image source={CONSTANT.App.staticImages.home} />,
        }}
      />
      <Tab.Screen name="dashboard" component={DashBoardScreen} />
      <Tab.Screen name="event" component={EventScreen} />
      <Tab.Screen name="prayer" component={PrayerScreen} />

      <Tab.Screen
        name="more"
        component={servStack}
        // listeners={({route, navigation}) => ({
        //   tabPress: e => {
        //     e.preventDefault();
        //     console.log('route', route);
        //     route.state.routeName.map(name => {});
        //     // navigation.navigate('more')
        //   },
        // })}
      />
      {/* just to show tabbar in stack */}
    </Tab.Navigator>
  );
}

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="TabStack" component={MyTabs} />
//     </Drawer.Navigator>
//   );
// }

const Stack = createStackNavigator();

function AppStackNavigator() {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName={CONSTANT.App.screenNames.splash}>
      <Stack.Screen name={CONSTANT.App.screenNames.home} component={MyTabs} />
      <Stack.Screen
        name={CONSTANT.App.screenNames.profile}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={CONSTANT.App.screenNames.login}
        component={LoginScreen}
      />
      <Stack.Screen
        name={CONSTANT.App.screenNames.splash}
        component={OnBoardingScreen}
      />
      <Stack.Screen
        name={CONSTANT.App.screenNames.forgot}
        component={ForgotPassScreen}
      />
      <Stack.Screen
        name={CONSTANT.App.screenNames.signup}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={CONSTANT.App.screenNames.eventDetail}
        component={EventDetailScreen}
      />
      <Stack.Screen
        name={CONSTANT.App.screenNames.servicesDetail}
        component={ServiceDetaiScreen}
      />
    </Stack.Navigator>
  );
}

const Auth = createStackNavigator();

function AuthNavigator() {
  return (
    <Auth.Navigator headerMode="none">
      <Auth.Screen
        name={CONSTANT.App.screenNames.login}
        component={LoginScreen}
      />

      <Auth.Screen
        name={CONSTANT.App.screenNames.signup}
        component={SignUpScreen}
      />
      <Auth.Screen name={CONSTANT.App.screenNames.otp} component={OtpScreen} />
    </Auth.Navigator>
  );
}

const Splash = createStackNavigator();

function SplashNavigator() {
  return (
    <Splash.Navigator>
      <Splash.Screen
        name={CONSTANT.App.screenNames.splash}
        component={OnBoardingScreen}
      />
    </Splash.Navigator>
  );
}

export {AppStackNavigator, AuthNavigator, SplashNavigator};
