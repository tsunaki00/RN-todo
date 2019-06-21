import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import PageNavigator from './pages/'

// ログイン機能も実装できるように createSwitchNavigatorを使う
export const getRootNavigator = (loggedIn = false) => createAppContainer(
  createSwitchNavigator({
    Page: {
      screen: PageNavigator
    }
  }, {
    initialRouteName: 'Page',
    headerMode: 'none',
    mode: 'modal'
  })
);
