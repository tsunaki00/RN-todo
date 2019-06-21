import React from 'react';

import { TouchableOpacity, RefreshControl  } from 'react-native';
import { Container, View ,Text, Form, Item, Input, Textarea, Button } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Components
import Header from '../../../components/header/HeaderComponent'
import Content from '../../../components/content/ContentComponent';
import styles from './styles';

/** ToDo */
export default class TodoDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form : {
        subject : {label : 'タイトル', value : '', required  : true, error : ''},
        body    : {label : '本文',    value : '', required  : true, error : ''},
      }  
    };
  }

  componentWillMount() {
    this.props.get(this.props.navigation.getParam('id'));
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header 
          title={"Todo"}
          isBack={true}
          navigation={this.props.navigation} 
          />
        <Content wait={this.props.wait} refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {} }
          />}
        >
          <View>
            <Form style={{ margin : 10 }}>
              <Item style={ styles.item }>
                <Text>{this.props.result && this.props.result.title}</Text>
              </Item>
              <Item style={ styles.itemBody }>
                <Text>{this.props.result && this.props.result.body}</Text>
              </Item>
            </Form>
          </View>
        </Content>
      </Container>
    )
  }
}