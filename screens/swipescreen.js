// import React, { useState } from 'react'
// import { StyleSheet, View, Button } from 'react-native'
// import Swiper from 'react-native-deck-swiper'
// import RestaurantCard from '../components/cards/RestaurantCard'
// import useDeck from '../hooks/useDeck'
// import restaurants from '../data/restaurants'
// import SavedScreen from './SavedScreen'
// import EndOfDeckScreen from './EndOfDeckScreen'

// export default function SwipeScreen() {
//   // deck logic
//   const {
//     cards,
//     saved,
//     skipped,
//     deckVersion,
//     swipeRight,
//     swipeLeft,
//     resetSkipped,
//   } = useDeck(restaurants)

//   // which view to show
//   const [view, setView] = useState('swipe')  // 'swipe' | 'saved' | 'end'

//   // 1) Saved‐list view
//   if (view === 'saved') {
//     return <SavedScreen savedIds={saved} onBack={() => setView('swipe')} />
//   }

//   // 2) End‐of‐deck view
//   if (cards.length === 0 || view === 'end') {
//     return (
//       <EndOfDeckScreen
//         skippedCount={skipped.length}
//         savedCount={saved.length}
//         onReviewSkipped={() => {
//           resetSkipped()
//           setView('swipe')
//         }}
//         onExtendSearch={() => console.log('Extend search…')}
//         onViewSaved={() => setView('saved')}
//       />
//     )
//   }

//   // 3) Main swipe view
//   return (
//     <View style={styles.container}>
//       <Button
//         title={`View Saved (${saved.length})`}
//         onPress={() => setView('saved')}
//       />

//       <Swiper
//         key={deckVersion}
//         cards={cards}
//         cardIndex={0}
//         renderCard={card => <RestaurantCard restaurant={card} />}
//         onSwipedRight={swipeRight}
//         onSwipedLeft={swipeLeft}
//         stackSize={3}
//         stackSeparation={15}
//         stackScale={5}
//         backgroundColor="transparent"
//         verticalSwipe={false}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 10 },
// })

// screens/SwipeScreen.js

// screens/SwipeScreen.js

// screens/SwipeScreen.js

// screens/SwipeScreen.js

import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import RestaurantCard from '../components/cards/RestaurantCard'
import useDeck from '../hooks/useDeck'
import SavedListScreen from './SavedListScreen'
import RestaurantDetailScreen from './RestaurantDetailScreen'
import EndOfDeckScreen from './EndOfDeckScreen'
import restaurants from '../data/restaurants'
import Button from '../components/ui/Button'
import { Colors, Typography } from '../components/ui/theme'

export default function SwipeScreen() {
  // Deck logic using local data
  const {
    cards,
    saved,
    skipped,
    deckVersion,
    swipeRight,
    swipeLeft,
    resetSkipped,
  } = useDeck(restaurants)

  // UI view state and selection for detail
  const [view, setView] = useState('swipe')  // 'swipe' | 'list' | 'detail' | 'end'
  const [selected, setSelected] = useState(null)

  // 1) Saved list view
  if (view === 'list') {
    const savedItems = restaurants.filter(r => saved.includes(r.id))
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={Typography.h1}>Saved</Text>
          <Button title="Back" onPress={() => setView('swipe')} />
        </View>
        <SavedListScreen
          savedItems={savedItems}
          onBack={() => setView('swipe')}
          onSelect={item => {
            setSelected(item)
            setView('detail')
          }}
        />
      </SafeAreaView>
    )
  }

  // 2) Detail view for one saved restaurant
  if (view === 'detail' && selected) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={Typography.h1}>{selected.name}</Text>
          <Button title="Back" onPress={() => setView('list')} />
        </View>
        <RestaurantDetailScreen
          restaurant={selected}
          onBack={() => setView('list')}
        />
      </SafeAreaView>
    )
  }

  // 3) End-of-deck actions
  if (cards.length === 0 || view === 'end') {
    return (
      <SafeAreaView style={styles.container}>
        <EndOfDeckScreen
          skippedCount={skipped.length}
          savedCount={saved.length}
          onReviewSkipped={() => {
            resetSkipped()
            setView('swipe')
          }}
          onExtendSearch={() => console.log('Extend search…')}
          onViewSaved={() => setView('list')}
        />
      </SafeAreaView>
    )
  }

  // 4) Main swipe deck UI
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={Typography.h1}>Discover</Text>
        <Button
          title={`Saved (${saved.length})`}
          onPress={() => setView('list')}
          style={styles.headerButton}
        />
      </View>

      <View style={styles.swiperContainer}>
        <Swiper
          key={deckVersion}
          cards={cards}
          renderCard={card => <RestaurantCard restaurant={card} />}
          onSwipedRight={swipeRight}
          onSwipedLeft={swipeLeft}
          stackSize={3}
          stackScale={5}
          stackSeparation={15}
          verticalSwipe={false}
          backgroundColor="transparent"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  swiperContainer: {
    flex: 1,
    paddingTop: 20,
  },
})
