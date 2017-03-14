/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Component1 from './Components/Component1'
import Component2 from './Components/Component2'

export default class homepage extends Component {
  render() {
    return (
      <View >
        <Component1 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

AppRegistry.registerComponent('homepage', () => homepage);
