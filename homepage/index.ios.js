
import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, StyleSheet} from 'react-native';

import Component1 from './src/Components/Component1'
import Component2 from './src/Components/Component2'
import Login1 from './src/Components/Login1'
import ListNames from './src/Components/ListNames'

class homepage extends Component {
  render() {
    return (
      <ScrollView>
          <ListNames />
          <Login1 />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  texts: {
    color: 'red',
    fontSize: 25
  }
})



AppRegistry.registerComponent('homepage', () => homepage);
