// // data/restaurants.js
// export default [
//     {
//       id: '1',
//       name: 'La Taqueria',
//       image: require('/Users/jug/Documents/Tinder-for-Food/TinderFood/Screenshot 2025-06-12 at 10.26.16 AM.png'),
//       cuisine: 'Mexican',
//       rating: 4.7,
//       description: 'Fresh tacos, burritos, and more.',
//     },
//     // …more entries
//     {
//       id: '2',
//       name: 'Jugo Juice',
//       image: require('/Users/jug/Documents/Tinder-for-Food/TinderFood/Screenshot 2025-06-12 at 10.26.16 AM.png'),
//       cuisine: 'Mexican',
//       rating: 4.7,
//       description: 'Fresh tacos, burritos, and more.',
//     },
//     {
//       id: '3',
//       name: 'thomas is hot',
//       image: require('/Users/jug/Documents/Tinder-for-Food/TinderFood/Screenshot 2025-06-12 at 10.26.16 AM.png'),
//       cuisine: 'Mexican',
//       rating: 4.7,
//       description: 'Fresh tacos, burritos, and more.',
//     },
//     {
//       id: '4',
//       name: 'jug is hotter',
//       image: require('/Users/jug/Documents/Tinder-for-Food/TinderFood/Screenshot 2025-06-12 at 10.26.16 AM.png'),
//       cuisine: 'Mexican',
//       rating: 4.7,
//       description: 'Fresh tacos, burritos, and more.',
//     },
//   ];

// data/restaurants.ts
// data/restaurants.js

export default [
  {
    id: '1',
    name: 'La Taqueria',
    // Array of local images (make sure these files exist under /assets)
    images: [
      require('/Users/jug/Documents/Tinder-for-Food/TinderFood/shrimp-mexican.jpg'),
      require('/Users/jug/Documents/Tinder-for-Food/TinderFood/mexican-menu.avif'),
      require('/Users/jug/Documents/Tinder-for-Food/TinderFood/mexican stock tacos.webp'),
    ],
    cuisine: 'Mexican',
    rating: 4.7,
    description: 'Fresh tacos, burritos, and more.',
    reviews: [
      { id: 'r1', author: 'Alice', text: 'Best tacos in town!' },
      { id: 'r2', author: 'Bob',   text: 'Loved the salsa verde.' },
    ],
    menu: [
      { id: 'm1', name: 'Carne Asada Taco', price: '$3.50' },
      { id: 'm2', name: 'Chicken Burrito',  price: '$8.99' },
      { id: 'm3', name: 'Chips & Guac',     price: '$4.50' },
    ],
      latitude: 43.4643,    // e.g. actual lat/lng of the restaurant
      longitude: 80.5204,

  },
  {
    id: '2',
    name: 'Sushi Corner',
    images: [
      require('/Users/jug/Documents/Tinder-for-Food/TinderFood/premium_photo-1668146927669-f2edf6e86f6f.jpeg'),
      require('/Users/jug/Documents/Tinder-for-Food/TinderFood/360_F_130041213_ZpXZ0bV9cBwlxOeELSaBhOQEATGAnu6C.jpg'),
      require('/Users/jug/Documents/Tinder-for-Food/TinderFood/depositphotos_313903296-stock-photo-close-view-delicious-sushi-set.jpg'),
    ],
    cuisine: 'Japanese',
    rating: 4.9,
    description: 'Authentic rolls, nigiri, and sashimi.',
    reviews: [
      { id: 'r3', author: 'Carol',  text: 'The dragon roll is amazing!' },
      { id: 'r4', author: 'Dave',   text: 'Very fresh seafood.' },
    ],
    menu: [
      { id: 'm4', name: 'California Roll',  price: '$6.00' },
      { id: 'm5', name: 'Spicy Tuna Roll',  price: '$7.50' },
      { id: 'm6', name: 'Miso Soup',         price: '$2.00' },
    ],
    latitude: 37.7850,
    longitude: -122.4050,
  },

  {
    id: '3',
    name: 'Jugs Corner',
    images: [
      require('/Users/jug/Documents/Tinder-for-Food/TinderFood/indian-food.jpg'),
      require('/Users/jug/Documents/Tinder-for-Food/TinderFood/samosa.jpg'),
      require('/Users/jug/Documents/Tinder-for-Food/TinderFood/indian-menu.jpg'),
    ],
    cuisine: 'Indian',
    rating: 5.0,
    description: 'Authentic butter chicken, naan, and more!',
    reviews: [
      { id: 'r3', author: 'Carol',  text: 'The owner is very handsome!' },
      { id: 'r4', author: 'Dave',   text: 'Does anyone have the owners phone number? Asking for a friend.' },
    ],
    menu: [
      { id: 'm4', name: 'California Roll',  price: '$6.00' },
      { id: 'm5', name: 'Spicy Tuna Roll',  price: '$7.50' },
      { id: 'm6', name: 'Miso Soup',         price: '$2.00' },
    ],
    latitude: 37.7749,
    longitude: -122.4194,
  },
  // …add more restaurants here
]