import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import OffersModal from '../screens/OffersModal'

export default createStackNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    OffersModal: {
      screen: OffersModal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);