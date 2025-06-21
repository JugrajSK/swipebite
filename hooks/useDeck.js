// hooks/useDeck.js
import { useState } from 'react'

/**
 * useDeck hook encapsulates swipe logic for a deck of cards.
 * @param {Array} initialDeck - initial array of restaurant objects
 */
export default function useDeck(initialDeck) {
  const [cards, setCards] = useState(initialDeck)
  const [saved, setSaved] = useState([])      // store liked IDs
  const [skipped, setSkipped] = useState([])  // store passed card objects
  const [deckVersion, setDeckVersion] = useState(0)

  // Swipe right: remove first card, add to saved
  const swipeRight = () => {
    const [first, ...rest] = cards
    if (!first) return
    setSaved(prev => [...prev, first.id])
    setCards(rest)
    setDeckVersion(v => v + 1)
  }

  // Swipe left: remove first card, add to skipped
  const swipeLeft = () => {
    const [first, ...rest] = cards
    if (!first) return
    setSkipped(prev => [...prev, first])
    setCards(rest)
    setDeckVersion(v => v + 1)
  }

  // Reset skipped: reload deck with skipped cards
  const resetSkipped = () => {
    setCards(skipped)
    setSkipped([])
    setDeckVersion(v => v + 1)
  }

  return {
    cards,
    saved,
    skipped,
    deckVersion,
    swipeRight,
    swipeLeft,
    resetSkipped,
  }
}
