import { StyleSheet, View} from 'react-native'
import React from 'react'
import { Text } from 'moti';


export default function AppLoading() {
  return (
    <View style={styles.container}>
      <Text>AppLoading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFDD00',
  },
  text: {
    textAlign: 'center',
    color: '#DBDBDB',
    fontSize: 25,
  }
})