import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import RestaurantCard from '../components/cards/RestaurantCard';
import restaurants from '../data/restaurants';

export default function SwipeScreen() {
  const [cards, setCards] = useState(restaurants);

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => <RestaurantCard restaurant={card} />}
        onSwipedRight={(idx) => console.log('Liked', cards[idx].name)}
        onSwipedLeft={(idx)  => console.log('Passed', cards[idx].name)}
        cardIndex={0}
        backgroundColor="transparent"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});