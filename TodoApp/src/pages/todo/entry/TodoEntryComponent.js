import React from 'react';

import { TouchableOpacity, RefreshControl  } from 'react-native';
import { Container, View ,Text, Form, Item, Input, Textarea, Button } from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Components
import Header from '../../../components/header/HeaderComponent'
import Content from '../../../components/content/ContentComponent';
import styles from './styles';

/** ToDo */
export default class TodoEntryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry : false,
      form : {
        title : {label : 'タイトル', value : '', required  : true, error : ''},
        body  : {label : '本文',    value : '', required  : true, error : ''},
      }  
    };
  }

  componentWillMount() {
  }


  componentDidUpdate(props) {
    if (this.state.entry && this.props.entry) {
      this.props.navigation.goBack();
      this.setState({ entry : false });
    }    
  }
  _handleTextChange(name, value) {
    let form = this.state.form;
    form[name].value = value;
    this.setState({ form });
  }

  _entry() {
    this.setState({ entry : true });
    this.props.entry({
      title : this.state.form.title.value,
      body    : this.state.form.body.value
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header 
          title={"Todo登録"}
          isCancel={true}
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
                <Input placeholder={this.state.form.title.label} 
                  value={this.state.form.title.value}
                  onChangeText={e => {
                    this._handleTextChange('title', e)
                  }} 
                />
              </Item>
              <Item style={ styles.item }>
                <Textarea style={ styles.textarea } rowSpan={5} bordered placeholder={this.state.form.body.label} 
                  onChangeText={e => {
                    this._handleTextChange('body', e)
                  }} 
                />
              </Item>
              <Button style={ styles.entryBtn } onPress={ e => this._entry() } block bordered>
                <Text>登    録</Text>
              </Button>
            </Form>
          </View>
        </Content>
      </Container>
    )
  }
}