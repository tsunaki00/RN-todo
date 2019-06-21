import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Header, Left, Body, Right, Title, Text, Button, View } from 'native-base';

import styles from './styles';

/**
 * 共通Header
 */
export default class HeaderComponent extends React.Component {
  render() {
    return (
      <Header style={styles.header}>
      { this.props.leftRender ? 
        <Left>
          { this.props.leftRender() }
        </Left> : 
        this.props.isBack ? 
          <Left>
            <Button transparent onPress={e => this.props.navigation.goBack() }>
              <FontAwesome name="angle-left" size={25} style={ styles.headerBackIcon } />
              <Text style={ styles.headerBack }>Back</Text>
            </Button>
          </Left> : 
        this.props.isClose ? 
          <Left>
            <Button transparent onPress={e => this.props.navigation.goBack() }>
              <Text style={ styles.headerBack }>close</Text>
            </Button>
          </Left> :
        this.props.isCancel ? 
          <Left>
            <Button transparent onPress={e => this.props.navigation.goBack() }>
              <Text style={ styles.headerBack }>cancel</Text>
            </Button>
          </Left>           
        : <Left />
      }
      <Body>
        { // タイトル
        this.props.bodyRender ? 
          this.props.bodyRender() :
        this.props.title ? 
          <Title style={styles.headerTitle}>
            { this.props.title }
          </Title> : <View />
        }
      </Body>
      {
        this.props.rightRender ? 
        <Right>
          { this.props.rightRender() }
        </Right> : 
        <Right　/>
      }
    </Header>
    )
  }
  

} 