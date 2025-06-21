// import React, { useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import Swiper from 'react-native-deck-swiper';
// import RestaurantCard from '../components/cards/RestaurantCard';
// import restaurants from '../data/restaurants';

// export default function SwipeScreen() {
//   const [cards, setCards] = useState(restaurants);
//   const [saved, setSaved] = useState<string[]>([])  // store IDs or full objects

//     // Handler: user liked the card
//   const handleSwipeRight = (cardIndex: number) => {
//     const liked = cards[cardIndex]
//     // add to saved
//     setSaved(prev => [...prev, liked.id])
//     // remove from deck
//     const remaining = cards.filter((_, i) => i !== cardIndex)
//     setCards(remaining)
//   }


//   return (
//     <View style={styles.container}>
//       <Swiper
//         cards={cards}
//         renderCard={(card) => <RestaurantCard restaurant={card} />}
//         onSwipedRight={(idx) => console.log('Liked', cards[idx].name)}
//         onSwipedLeft={(idx)  => console.log('Passed', cards[idx].name)}
//         cardIndex={0}
//         backgroundColor="transparent"
//         stackSize={5}           // <-- show 3 cards in the stack
//         stackSeparation={15}     // <-- vertical offset between stacked cards
//         stackScale={5}           // <-- how much each card scales down (percent)

//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// });

// screens/SwipeScreen.js

// screens/SwipeScreen.js

// screens/SwipeScreen.js

// screens/SwipeScreen.js

import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import RestaurantCard from '../components/cards/RestaurantCard'
import restaurants from '../data/restaurants'

export default function SwipeScreen() {
  // Full deck, liked, and skipped lists
  const [cards, setCards] = useState(restaurants)
  const [saved, setSaved] = useState([])
  const [skipped, setSkipped] = useState([])
  const [deckVersion, setDeckVersion] = useState(0)

  // Swipe right → like (remove from deck permanently)
  const handleSwipeRight = () => {
    const [first, ...rest] = cards
    if (!first) return

    setSaved(prev => [...prev, first.id])
    setCards(rest)
    setDeckVersion(v => v + 1)
  }

  // Swipe left → skip (remove from deck but stash away)
  const handleSwipeLeft = () => {
    const [first, ...rest] = cards
    if (!first) return

    setSkipped(prev => [...prev, first])
    setCards(rest)
    setDeckVersion(v => v + 1)
  }

  // When deck is empty, show choices
  if (cards.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          You reached the end of your list!
        </Text>

        <View style={styles.buttonRow}>
          <Button
            title="Extend Search Area"
            onPress={() => {
              // TODO: hook into location/filters flow
              console.log('User chose to extend their search.')
            }}
          />

          <Button
            title="Review Skipped"
            onPress={() => {
              // reload the deck with only skipped cards
              setCards(skipped)
              setSkipped([])
              setDeckVersion(v => v + 1)
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Swiper
        key={deckVersion}
        cards={cards}
        cardIndex={0}
        renderCard={card => <RestaurantCard restaurant={card} />}
        onSwipedRight={handleSwipeRight}
        onSwipedLeft={handleSwipeLeft}
        stackSize={3}
        stackSeparation={15}
        stackScale={5}
        backgroundColor="transparent"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
    color: '#555',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
})