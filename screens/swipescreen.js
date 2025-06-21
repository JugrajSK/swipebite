// // screens/SwipeScreen.js

// import React, { useState } from 'react'
// import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
// import Swiper from 'react-native-deck-swiper'
// import RestaurantCard from '../components/cards/RestaurantCard'
// import restaurants from '../data/restaurants'

// export default function SwipeScreen() {
//   const [cards, setCards] = useState(restaurants)
//   const [saved, setSaved] = useState([])      // store liked IDs
//   const [skipped, setSkipped] = useState([])  // store skipped objects
//   const [deckVersion, setDeckVersion] = useState(0)
//   const [showSaved, setShowSaved] = useState(false)

//   // Handlers always act on the first card
//   const handleSwipeRight = () => {
//     const [first, ...rest] = cards
//     if (!first) return

//     setSaved(prev => [...prev, first.id])
//     setCards(rest)
//     setDeckVersion(v => v + 1)
//   }

//   const handleSwipeLeft = () => {
//     const [first, ...rest] = cards
//     if (!first) return

//     setSkipped(prev => [...prev, first])
//     setCards(rest)
//     setDeckVersion(v => v + 1)
//   }

//   // Derive full objects for saved list
//   const savedItems = restaurants.filter(r => saved.includes(r.id))

//   // 1) Saved-list view
//   if (showSaved) {
//     return (
//       <View style={styles.savedContainer}>
//         <Text style={styles.header}>⭐ Saved Restaurants</Text>

//         {savedItems.length === 0 ? (
//           <Text style={styles.emptyText}>You haven’t saved any yet.</Text>
//         ) : (
//           <ScrollView contentContainerStyle={styles.scrollContainer}>
//             {savedItems.map(item => (
//               <RestaurantCard restaurant={item} key={item.id} />
//             ))}
//           </ScrollView>
//         )}

//         <Button title="Back to Swiping" onPress={() => setShowSaved(false)} />
//       </View>
//     )
//   }

//   // 2) End-of-deck view
//   if (cards.length === 0) {
//     return (
//       <View style={styles.emptyContainer}>
//         <Text style={styles.emptyText}>
//           You reached the end of your list!
//         </Text>

//         <View style={styles.buttonRow}>
//           <Button
//             title="Extend Search Area"
//             onPress={() => console.log('Extend search logic here')}
//           />
//           <Button
//             title={`Review Skipped (${skipped.length})`}
//             onPress={() => {
//               setCards(skipped)
//               setSkipped([])
//               setDeckVersion(v => v + 1)
//             }}
//           />
//         </View>

//         <Button
//           title={`View Saved (${savedItems.length})`}
//           onPress={() => setShowSaved(true)}
//         />
//       </View>
//     )
//   }

//   // 3) Main swipe-deck view
//   return (
//     <View style={styles.container}>
//       <Button
//         title={`View Saved (${savedItems.length})`}
//         onPress={() => setShowSaved(true)}
//       />

//       <Swiper
//         key={deckVersion}
//         cards={cards}
//         cardIndex={0}
//         renderCard={card => <RestaurantCard restaurant={card} />}
//         onSwipedRight={handleSwipeRight}
//         onSwipedLeft={handleSwipeLeft}
//         stackSize={3}
//         stackSeparation={15}
//         stackScale={5}
//         backgroundColor="transparent"
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingTop: 10,
//   },
//   savedContainer: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 12,
//   },
//   scrollContainer: {
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   emptyText: {
//     fontSize: 18,
//     textAlign: 'center',
//     color: '#555',
//     marginBottom: 16,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginBottom: 16,
//   },
// })

// screens/SwipeScreen.js

// screens/SwipeScreen.js

import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import RestaurantCard from '../components/cards/RestaurantCard'
import useDeck from '../hooks/useDeck'
import restaurants from '../data/restaurants'
import SavedScreen from './SavedScreen'
import EndOfDeckScreen from './EndOfDeckScreen'

export default function SwipeScreen() {
  // deck logic
  const {
    cards,
    saved,
    skipped,
    deckVersion,
    swipeRight,
    swipeLeft,
    resetSkipped,
  } = useDeck(restaurants)

  // which view to show
  const [view, setView] = useState('swipe')  // 'swipe' | 'saved' | 'end'

  // 1) Saved‐list view
  if (view === 'saved') {
    return <SavedScreen savedIds={saved} onBack={() => setView('swipe')} />
  }

  // 2) End‐of‐deck view
  if (cards.length === 0 || view === 'end') {
    return (
      <EndOfDeckScreen
        skippedCount={skipped.length}
        savedCount={saved.length}
        onReviewSkipped={() => {
          resetSkipped()
          setView('swipe')
        }}
        onExtendSearch={() => console.log('Extend search…')}
        onViewSaved={() => setView('saved')}
      />
    )
  }

  // 3) Main swipe view
  return (
    <View style={styles.container}>
      <Button
        title={`View Saved (${saved.length})`}
        onPress={() => setView('saved')}
      />

      <Swiper
        key={deckVersion}
        cards={cards}
        cardIndex={0}
        renderCard={card => <RestaurantCard restaurant={card} />}
        onSwipedRight={swipeRight}
        onSwipedLeft={swipeLeft}
        stackSize={3}
        stackSeparation={15}
        stackScale={5}
        backgroundColor="transparent"
        verticalSwipe={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 10 },
})