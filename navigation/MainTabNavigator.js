import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MeScreen from '../screens/MeScreen';

import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Me: MeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        'md-person'
      }
    />
  ),
};

const MapStack = createStackNavigator({
  Map: MapScreen,
});

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Booked',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-car' : 'md-car'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MapStack,
  SettingsStack,
}, 
{
  initialRouteName: 'MapStack',
  tabBarOptions: {
    activeTintColor: Colors.sixtyOrange,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: Colors.sixtyBlack,
    },
  }
}
);
