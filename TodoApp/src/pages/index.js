import React from 'react';
import { createStackNavigator} from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TodoStack from './todo/TodoStack';

import TodoEntry from './todo/entry/TodoEntryContainer';


const TabBarComponent = (props) => (<BottomTabBar {...props} />);

//TAB View
const Tabs = createBottomTabNavigator({

  Todo: {
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <FontAwesome name="list-alt" size={30} style={[{ color: tintColor }]} />,
      tabBarLabel: ''
    },
    screen: TodoStack
  }

}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
  initialRouteName: 'Todo',
  showLabel: false,
  style: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    }
  },
  tabBarComponent: props => (
    <TabBarComponent {...props} />
  )  
});

export default createStackNavigator({
  Tabs: { screen: Tabs },
  TodoEntry: { screen: TodoEntry },
}, {
  headerMode: 'none',
  initialRouteName: 'Tabs',
  mode: 'modal'
});


