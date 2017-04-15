
import React, { Component } from 'react';
import { AppRegistry, Keyboard, TextInput } from 'react-native';

export default class Component3 extends Component {
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    alert('Keyboard Hidden');
  }

  render() {
    return (
      <TextInput
        keyboardType='numeric'
        placeholder='type here'
        style={{ padding: 30 }}
        onSubmitEditing={Keyboard.dismiss}
      />
    );
  }
}
