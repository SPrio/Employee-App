import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './Home';
import Show from './Show';
import Edit from './Edit';

const App = createStackNavigator({
  First: {screen: Home},

  Second: {screen: Show},

  Third: {screen: Edit},
});
export default createAppContainer(App);
