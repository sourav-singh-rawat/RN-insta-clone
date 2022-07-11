import {StyleSheet} from 'react-native';
import React from 'react';
import HomeScreen from './screens/home';
import ExploreScreen from './screens/explore';
import NotificationScreen from './screens/notifications';
import ProfileScreen from './screens/profile';
import {Image} from 'react-native';
import IconAsset from './constants/icons';
import ReelsScreen from './screens/reels';
import {ProfileAvatar, ProfileAvatarHighlighted} from './components/avatar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './screens/search';

const Tab = createBottomTabNavigator();
const NativeStack = createNativeStackNavigator();

const BottomTabBar = () => {
  const header = ({layout, options, route, navigation}) => {};

  const tabBarIcon = ({route, focused, color, size}) => {
    let icon;
    const routeName = route.name;

    if (routeName != 'Profile') {
      let iconName;

      switch (routeName) {
        case 'Home':
          iconName = focused ? IconAsset.homeFilled : IconAsset.home;
          break;
        case 'Explore':
          iconName = IconAsset.search;
          break;
        case 'Reels':
          iconName = IconAsset.reels;
          break;
        case 'Notification':
          iconName = IconAsset.heart;
          break;
      }

      icon = (
        <Image
          source={iconName}
          style={{width: size, height: size, tintColor: color}}
        />
      );
    } else {
      icon = focused ? (
        <ProfileAvatarHighlighted size={size} title={'S'} padding={1} />
      ) : (
        <ProfileAvatar size={size} title={'S'} />
      );
    }

    return icon;
  };

  return (
    <Tab.Navigator
      id="BottomTabBar"
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={({route}) => ({
        header: header,
        tabBarIcon: ({focused, color, size}) =>
          tabBarIcon({route, focused, color, size}),
        tabBarLabel: () => null,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={SearchScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({});
