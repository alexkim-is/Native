
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Component1 from './src/Components/Component1'
import Component2 from './src/Components/Component2'
import Login1 from './src/Components/Login1'

class homepage extends Component {
  render() {
    return (
      <View>
        <Login1 />
      </View>
    )
  }
}


AppRegistry.registerComponent('homepage', () => homepage);
