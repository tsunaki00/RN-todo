import React, {Component} from 'react';
import { getRootNavigator }  from './RootNavigator';
import { Provider } from 'react-redux';

import AppStore from './store/AppStore';


export default class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    let Root = getRootNavigator();
    return (
      <Provider store={AppStore}>
        <Root />
      </Provider>
    );
  }
}
