import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import RestaurantCard from '../components/cards/RestaurantCard'

export default function RestaurantDetailScreen({ restaurant, onBack }) {
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={onBack} />
      <RestaurantCard restaurant={restaurant} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
})
