// import React from 'react';
// import { Image, StyleSheet, Text, View } from 'react-native';

// export interface Restaurant {
//   id: string;
//   name: string;
//   image: any;        // require() or { uri: string }
//   cuisine: string;
//   rating: number;
//   description: string;
// }

// interface Props {
//   restaurant: Restaurant;
// }

// export default function RestaurantCard({ restaurant }: Props) {
//   console.log('🍽️ RestaurantCard got:', restaurant);

//   if (!restaurant || !restaurant.image) {
//     return (
//       <View style={{ padding: 16, alignItems: 'center' }}>
//         <Text>No restaurant data or image</Text>
//       </View>
//     );
//   }
//   return (
//     <View style={styles.card}>
//       <Image source={restaurant.image} style={styles.image} />
//       <View style={styles.info}>
//         <Text style={styles.name}>{restaurant.name}</Text>
//         <Text style={styles.sub}>
//           {restaurant.cuisine} • ⭐ {restaurant.rating}
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     width: 320,
//     height: 420,
//     borderRadius: 16,
//     backgroundColor: '#fff',
//     overflow: 'hidden',
//     elevation: 3,           // Android shadow
//     shadowColor: '#000',    // iOS shadow
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   image: {
//     width: '100%',
//     height: '75%',
//   },
//   info: {
//     padding: 12,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: '600',
//   },
//   sub: {
//     fontSize: 16,
//     color: '#555',
//     marginTop: 4,
//   },
// });

// components/cards/RestaurantCard.tsx

// components/cards/RestaurantCard.tsx
// import React from 'react'
// import { View, Text, ScrollView, StyleSheet, ImageSourcePropType } from 'react-native'
// import ImageCarousel from '../ui/ImageCarousel'

// // Review and Menu item types
// export interface Review {
//   id: string
//   author: string
//   text: string
// }

// export interface MenuItem {
//   id: string
//   name: string
//   price: string
// }

// // Extended Restaurant type
// export interface Restaurant {
//   id: string
//   name: string
//   images: ImageSourcePropType[]      // array of images
//   cuisine: string
//   rating: number
//   description?: string
//   reviews?: Review[]
//   menu?: MenuItem[]
// }

// interface RestaurantCardProps {
//   restaurant: Restaurant
// }

// export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
//   if (!restaurant) return null

//   return (
//     <View style={styles.card}>
//       {/* 1) Image carousel */}
//       <ImageCarousel images={restaurant.images} />

//       {/* 2) Scrollable content */}
//       <ScrollView style={styles.content}>
//         <Text style={styles.name}>{restaurant.name}</Text>
//         <Text style={styles.details}>
//           {restaurant.cuisine} • ⭐ {restaurant.rating}
//         </Text>
//         {restaurant.description ? (
//           <Text style={styles.description}>{restaurant.description}</Text>
//         ) : null}

//         {/* 3) Reviews section */}
//         {restaurant.reviews && restaurant.reviews.length > 0 && (
//           <>
//             <Text style={styles.sectionTitle}>Reviews</Text>
//             {restaurant.reviews.map(r => (
//               <View key={r.id} style={styles.review}>
//                 <Text style={styles.reviewAuthor}>{r.author}</Text>
//                 <Text style={styles.reviewText}>{r.text}</Text>
//               </View>
//             ))}
//           </>
//         )}

//         {/* 4) Menu section */}
//         {restaurant.menu && restaurant.menu.length > 0 && (
//           <>
//             <Text style={styles.sectionTitle}>Menu</Text>
//             {restaurant.menu.map(m => (
//               <View key={m.id} style={styles.menuItem}>
//                 <Text style={styles.menuName}>{m.name}</Text>
//                 <Text style={styles.menuPrice}>{m.price}</Text>
//               </View>
//             ))}
//           </>
//         )}
//       </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   card: {
//     width: '100%',
//     flex: 1,
//     borderRadius: 16,
//     backgroundColor: '#fff',
//     overflow: 'hidden',
//     marginBottom: 20,
//   },
//   content: {
//     padding: 12,
//     maxHeight: 240,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   details: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 14,
//     color: '#333',
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginTop: 12,
//     marginBottom: 4,
//   },
//   review: {
//     marginBottom: 8,
//   },
//   reviewAuthor: {
//     fontWeight: '500',
//   },
//   reviewText: {
//     fontSize: 14,
//     color: '#444',
//   },
//   menuItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 6,
//   },
//   menuName: {
//     fontSize: 14,
//   },
//   menuPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//   },
// })

// components/cards/RestaurantCard.tsx
// components/cards/RestaurantCard.tsx
import React from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import ImageCarousel from '../ui/ImageCarousel'

// Types
export interface Review {
  id: string
  author: string
  text: string
}
export interface MenuItem {
  id: string
  name: string
  price: string
}
export interface Restaurant {
  id: string
  name: string
  images: any[]          // array of ImageSourcePropType
  cuisine: string
  rating: number
  description?: string
  reviews?: Review[]      
  menu?: MenuItem[]       
}
interface Props {
  restaurant: Restaurant
}

const { width } = Dimensions.get('window')
const CARD_WIDTH = width * 0.9
const IMAGE_HEIGHT = 250

export default function RestaurantCard({ restaurant }: Props) {
  if (!restaurant) return null
  const { images, name, cuisine, rating, description, reviews, menu } = restaurant
  const primaryImage = images?.[0]
  const secondaryImage = images?.[1]
  const tertiaryImage = images?.[2]
  const featuredItem = menu?.[0]

  return (
    <View style={[styles.card, { width: CARD_WIDTH }]}>       
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* 1) Image or carousel with rounded top corners */}
        {images?.length > 1 ? (
          <ImageCarousel images={images} />
        ) : (
          primaryImage && (
            <Image
              source={primaryImage}
              style={[styles.image, styles.topImage]}
            />
          )
        )}

        {/* 2) About Section */}
        <View style={[styles.section, { width: CARD_WIDTH }]}>  
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.details}>{cuisine} • ⭐ {rating}</Text>
          {description && (
            <Text style={styles.description}>{description}</Text>
          )}
        </View>

        {/* 3) Secondary Image */}
        {secondaryImage && (
          <Image source={secondaryImage} style={styles.image} />
        )}

        {/* 4) Featured Menu Item */}
        {featuredItem && (
          <View style={[styles.section, { width: CARD_WIDTH }]}>  
            <Text style={styles.sectionTitle}>Featured</Text>
            <Text style={styles.featuredName}>{featuredItem.name}</Text>
            <Text style={styles.featuredPrice}>{featuredItem.price}</Text>
          </View>
        )}

        {/* 5) Tertiary Image */}
        {tertiaryImage && (
          <Image source={tertiaryImage} style={styles.image} />
        )}

        {/* 6) Reviews Section */}
        {reviews && reviews.length > 0 && (
          <View style={[styles.section, { width: CARD_WIDTH }]}>  
            <Text style={styles.sectionTitle}>Reviews</Text>
            {reviews.map(r => (
              <View key={r.id} style={styles.review}>
                <Text style={styles.reviewAuthor}>{r.author}</Text>
                <Text style={styles.reviewText}>{r.text}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: CARD_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: 'cover',
  },
  topImage: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
  featuredName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  featuredPrice: {
    fontSize: 16,
    color: '#555',
  },
  review: {
    marginBottom: 12,
  },
  reviewAuthor: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 2,
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
  },
})