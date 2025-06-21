// screens/EndOfDeckScreen.js

import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import ButtonRow from '../components/ui/ButtonRow'
import EmptyState from '../components/ui/EmptyState'

export default function EndOfDeckScreen({
  skippedCount,
  savedCount,
  onReviewSkipped,
  onExtendSearch,
  onViewSaved,
}) {
  return (
    <View style={styles.container}>
      <EmptyState
        title="You’ve reached the end!"
        subtitle={`🔄 ${skippedCount} skipped   •   ⭐ ${savedCount} saved`}
      />

      <ButtonRow>
        <Button title="Extend Search Area" onPress={onExtendSearch} />
        <Button
          title={`Review Skipped (${skippedCount})`}
          onPress={onReviewSkipped}
        />
      </ButtonRow>

      <ButtonRow>
        <Button
          title={`View Saved (${savedCount})`}
          onPress={onViewSaved}
        />
      </ButtonRow>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
})