
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text,
          StatusBar
          } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
        <TextInput
          keyboardType='email-address'
          placeholder='username'
          placeholderTextColor='#FFFFFF'
          returnKeyType='next'
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize='none'
          autoCorrection={false}
          style={styles.input}
        />
        <TextInput
          keyboardType='numeric'
          maxLength={4}
          returnKeyType='go'
          secureTextEntry
          placeholder='PIN number'
          placeholderTextColor='#FFFFFF'
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
      <TouchableOpacity style={styles.button} onPress={(event) => console.log("here")}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor:'#4dc3ff',
    marginBottom: 10,
    borderRadius: 5,
    paddingLeft: 10
  },
  button: {
    backgroundColor: '#0077b3',
    height: 40,
    borderRadius: 5
  },
  text: {
    paddingLeft: 10,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 15
  }
})
