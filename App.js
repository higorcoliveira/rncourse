import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  state = {
    placeName: ''
  }

  placeNameChangeHandler = value => {
    this.setState({
      placeName: value
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={{width: 300, borderColor: "black", borderWidth: 1}}  
            value={this.state.placeName} 
            onChangeText={this.placeNameChangeHandler} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
