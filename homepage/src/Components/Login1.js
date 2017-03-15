
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm'

export default class Login1 extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../images/reddit.png')}
                  style={styles.logo}
            />
            <Text style={styles.title}>Reddit App using React Native</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm />
          </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    height: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1

  },
  formContainer: {
    padding: 20
  },
  logo: {
    width: 90,
    height: 125
  },
  title: {
    color: 'white',
    padding: 10,
    fontWeight: '500'
  }

})
