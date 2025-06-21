import React from 'react'
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native'
import RestaurantCard from '../components/cards/RestaurantCard'
import restaurants from '../data/restaurants'
import EmptyState from '../components/ui/EmptyState'



export default function SavedScreen({ savedIds, onBack }) {
  // pull the full objects by ID
  const savedItems = restaurants.filter(r => savedIds.includes(r.id))

  return (
    <View style={styles.container}>
      <Text style={styles.header}>⭐ Saved Restaurants</Text>

      {savedItems.length === 0 ? (
        <EmptyState
            title="You haven’t saved any restaurants yet."
        />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {savedItems.map(item => (
            <RestaurantCard restaurant={item} key={item.id} />
          ))}
        </ScrollView>
      )}

      <Button title="Back to Swiping" onPress={onBack} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { fontSize: 20, fontWeight: '600', marginBottom: 12 },
  scrollContainer: { alignItems: 'center', paddingBottom: 20 },
  emptyText: { fontSize: 16, color: '#555', marginVertical: 20, textAlign: 'center' },
})