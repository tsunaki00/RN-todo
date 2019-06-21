
import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';

export default class WaitComponent extends React.Component {
  componentWillMount() {
  }

  render() {
    return (
      <View style={styles.loading}>
        <View style={styles.container}>
          <Spinner
            visible={this.props.wait}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
        </View>
      </View>      
    );
  }
  

} 