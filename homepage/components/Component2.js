import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput } from 'react-native';


export default class Component3 extends Component {
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
             borderBottomColor: 'red',
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


AppRegistry.registerComponent('Component3', ()=> Component3)
