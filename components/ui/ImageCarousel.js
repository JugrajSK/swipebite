// components/ui/ImageCarousel.js

import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')
const IMAGE_HEIGHT = 200

/**
 * @param {{ images: any[]; style?: import('react-native').ImageStyle }} props
 */
export default function ImageCarousel({ images, style }) {
  return (
    <FlatList
      data={images}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, i) => String(i)}
      renderItem={({ item }) => (
        <Image source={item} style={[styles.image, style]} />
      )}
      // If you ever want to style the list container itself, you could also do:
      // style={style}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width,
    height: IMAGE_HEIGHT,
    resizeMode: 'cover',
  },
})