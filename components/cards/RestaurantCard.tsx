import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export interface Restaurant {
  id: string;
  name: string;
  image: any;        // require() or { uri: string }
  cuisine: string;
  rating: number;
  description: string;
}

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <View style={styles.card}>
      <Image source={restaurant.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.sub}>
          {restaurant.cuisine} • ⭐ {restaurant.rating}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 420,
    borderRadius: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 3,           // Android shadow
    shadowColor: '#000',    // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    width: '100%',
    height: '75%',
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
  },
  sub: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
});