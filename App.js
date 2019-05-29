import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import PlaceList from './src/components/PlaceList'
import PlaceInput from './src/components/PlaceInput'

export default class App extends Component {
  state = {
    places: []
  }

  placeSubmitHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    })
  }

  render() {
    const { places } = this.state

    return (
      <View style={styles.container}>
        <PlaceInput onAddPlace={this.placeSubmitHandler} />
        <PlaceList places={places} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
})
