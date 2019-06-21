import React from 'react';

import { Alert, FlatList, TouchableOpacity, RefreshControl  } from 'react-native';
import { Container, View ,Text, List, ListItem, Body, Button } from 'native-base';

import Swipeout from 'react-native-swipeout';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Components
import Header from '../../../components/header/HeaderComponent'
import Content from '../../../components/content/ContentComponent';
import styles from './styles';

/**
 * ToDo
 */
export default class TodoIndexComponent extends React.Component {

  componentWillMount() {
    this.props.navigation.addListener('didFocus', () => this._onFocus())
  }

  _onFocus() {
    this.props.getList();
  }

  _delete(item) {
    Alert.alert(
      '削除',
      `「${ item.title}」を削除します。\nよろしいですか？`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => this.props.remove(item.id) }
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header 
          title={"Todoリスト"}
          isBack={false}
          navigation={this.props.navigation} 
          rightRender={e =>
            <Button transparent onPress={e => {
              this.props.navigation.navigate('TodoEntry')
            }}>
              <Text><FontAwesome name="plus" /> 新規登録</Text>
            </Button>
          }
          />
        <Content wait={this.props.wait} refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {} }
          />
          }>
          <List>
          {this.props.results && this.props.results.length > 0 ? 
            <FlatList
              data={this.props.results}
              renderItem={({ item }) => (
                <Swipeout style={ styles.listItem } right={[
                  {
                    backgroundColor: "#fff",
                    component : (
                      <TouchableOpacity onPress={e => {}}>
                        <View style={ styles.updateButton }>
                          <FontAwesome name="edit" style={ styles.updateButtonText } />
                        </View>
                      </TouchableOpacity>
                    )
                  } ,{
                  backgroundColor: "#fff",
                  component : (
                    <TouchableOpacity onPress={e => {
                      this._delete(item);
                    }}>
                      <View style={ styles.deleteButton }>
                        <FontAwesome name="trash-o" style={ styles.deleteButtonText } />
                      </View>
                    </TouchableOpacity>
                  )
                  }]}>
                  <TouchableOpacity onPress={e => { this.props.navigation.navigate('TodoDetail', { id : item.id }) } } style={styles.row}>
                    <View style={ styles.listView } >
                      <Text>{ item.title }</Text>
                    </View>
                    <View style={ styles.listViewIcon }>
                      <FontAwesome name={"chevron-right"} />
                    </View>
                  </TouchableOpacity>
                </Swipeout>
              )}
            /> : 
              <ListItem>
                <Body>
                  <Text>登録はありません</Text>
                </Body>
              </ListItem>
            }
          </List> 
        </Content>
        {/* 登録ボタン */}
        <TouchableOpacity
            onPress={e => { this.props.navigation.navigate('TodoEntry') } } style={ styles.entry }>
          <View>
            <FontAwesome name="edit" size={30} />
          </View>
        </TouchableOpacity>

      </Container>
    )
  }
}