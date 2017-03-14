import React, { Component } from 'react'
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity,
          TouchableHighlight, MapView

        } from 'react-native'

export default class Component1 extends Component {
    constructor(props){
      super(props)
      this.state = {
        name: 'Alex',
        showName: true,
        message: this.props.message
      }
    }

    static defaultProps = {
      message: 'Hi there!'
    }

    onPress(){
      console.log('Pressed')
    }

  render() {
    let name = this.state.showName ? 'Alex' : 'Not Alex'

    return (
      <View>
          <View style={ styles.myColor }>
              <Text style={ styles.myPadding }>{this.state.message}</Text>
              <Text style={ styles.myPadding }>{name}</Text>
          </View>
          <View style={styles.container}>
              <TouchableOpacity style={ styles.v1} activeOpacity={0.1}>
                  <View >
                    <Text>Active Opacity</Text>
                  </View>
              </TouchableOpacity>
              <TouchableHighlight onPress={this.onPress} style={ styles.v2}>
                  <View>
                      <Text>Touchable Highlight</Text>
                  </View>
              </TouchableHighlight>
          </View>
          <MapView
              style={{ height: 200}}
              showUserLocation={true}
          />
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    myPadding: {
      padding: 20,
      textAlign: 'center',
      marginTop: 15
    },
    myColor: {
      backgroundColor: 'lightblue'
    },
    container: {
      flexDirection: 'row',
      height: 100,
        },
    v1: {
      flex:1,
      backgroundColor: 'orange',
      padding: 10
    },
    v2: {
      flex:1,
      backgroundColor: 'grey',
      padding: 10
    },
    v3: {
      flex:1,
      backgroundColor: 'green',
      padding: 10
    }
  })


AppRegistry.registerComponent('Component1', ()=> Component1)
