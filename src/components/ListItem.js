import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListItem = (props) => (
    <View style={styles.container}>
        <Text>{props.placeName}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 10,
      margin: 5,
      backgroundColor: "#eee",
      alignItems: "center",
      justifyContent: "flex-start"
    },
})

export default ListItem
