import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput,
          Keyboard

 } from 'react-native';


export default class Component2 extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  onChangeText(input){
    this.setState({
      text: input
    })
  }

  render() {
    return (
      <View>
       <TextInput
          {...this.props}
          maxLength={40}
          style={{ padding: 30,
             color: 'red',
            }}
          placeholder='enter text'
          onChangeText={(value)=> this.onChangeText(value)}
          value={this.state.text}
        />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('Component2', ()=> Component2)
