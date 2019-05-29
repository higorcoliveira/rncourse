import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

class PlaceInput extends Component {
  state = {
    placeName: ""
  }

  placeNameChangedHandler = value => {
    this.setState({
      placeName: value
    })
  }
  
  placeSubmitHandler = () => {
      const { onAddPlace } = this.props
      if (this.state.placeName.trim() === "") {
        return;
      }
      onAddPlace(this.state.placeName)
  }

    render() {
      const { placeName } = this.state

      return (
          <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="An awesome place..."
                value={placeName}
                onChangeText={this.placeNameChangedHandler}
            />
            <Button 
                title="Add" 
                style={styles.button}
                onPress={this.placeSubmitHandler}
            />
          </View>
      )
  }
}

const styles = StyleSheet.create({  
    inputContainer: {
      width: "100%",
      flexDirection: "row",    
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      width: "70%"
    },
    button: {
      width: "30%"
    }
})

export default PlaceInput