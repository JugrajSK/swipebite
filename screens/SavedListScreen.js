// screens/SavedListScreen.js
import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Button, StyleSheet } from 'react-native'

export default function SavedListScreen({ savedItems, onBack, onSelect }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Restaurants</Text>

      <FlatList
        data={savedItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.row}
            onPress={() => onSelect(item)}
          >
            <Image
              source={item.images[0]}
              style={styles.thumbnail}
            />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Button title="Back to Swiping" onPress={onBack} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    flexShrink: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
  },
})