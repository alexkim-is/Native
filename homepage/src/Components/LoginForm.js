
import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text,
        
          } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='username'
          placeholderTextColor='#FFFFFF'
          style={styles.input}
        />
        <TextInput
          secureTextEntry
          placeholder='password'
          placeholderTextColor='#FFFFFF'
          style={styles.input}
        />
      <TouchableOpacity style={styles.button}>
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