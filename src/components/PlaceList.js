import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListItem from "./ListItem"

const PlaceList = (props) => {
    const { places } = props
    const placesOutput = places.map((place, i) => (
        <ListItem key={i} placeName={place} />
    ))

    return (
        <View style={styles.listContainer}>
            {placesOutput}
        </View>
    ) 
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
})

export default PlaceList