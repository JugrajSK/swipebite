// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>i'm the.</Text>
//     </View>
//   );
// }
// app/(tabs)/index.tsx

import React from 'react'
import SwipeScreen from '/Users/jug/Documents/Tinder-for-Food/TinderFood/screens/swipescreen.js'  // go up from (tabs) → app → root → screens

export default function HomeTab() {
  return <SwipeScreen />
}
