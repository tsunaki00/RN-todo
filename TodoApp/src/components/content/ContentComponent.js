
import React from 'react';
import { Content } from 'native-base';
import Wait from '../wait/WaitComponent';

export default class ContentComponent extends React.Component {
  componentWillMount() {
  }
  
  render() {
    return (
      <Content { ...this.props }>
        <Wait wait={this.props.wait} />
        {this.props.children}
      </Content>      
    );
  }
  

} 