import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class Login extends Component {

  render() {
    return (
      <View style={styles.myPadding}>
        <Text>helo</Text>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    myPadding: {
      padding: 20,
      textAlign: 'center',
      marginTop: 15
    }
  })
