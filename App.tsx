// import { View, StyleSheet } from 'react-native'
// import { useState } from 'react'
// import { StatusBar } from 'expo-status-bar'

// import Header from './src/components/Header'
// import Search from './src/components/Search'
// import Categories from './src/components/Categories'
// import Restaurants from './src/components/Restaurants'

// export default function App() {
//   const [term, setTerm] = useState('Burger')
//   const commonCategories = [
//     {
//       name: 'Burger',
//       imgUrl: require('./src/assets/categoryImg/burger.png'),
//     },
//     {
//       name: 'Pizza',
//       imgUrl: require('./src/assets/categoryImg/pizza.png'),
//     },
//     {
//       name: 'Dessert',
//       imgUrl: require('./src/assets/categoryImg/cake.png'),
//     },
//     {
//       name: 'Drinks',
//       imgUrl: require('./src/assets/categoryImg/smoothies.png'),
//     },
//     {
//       name: 'Steak',
//       imgUrl: require('./src/assets/categoryImg/steak.png'),
//     },
//     {
//       name: 'Pasta',
//       imgUrl: require('./src/assets/categoryImg/pasta.png'),
//     },
//   ]

//   return (
//     <View>
//       <Header />
//       <Search setTerm={setTerm} />
//       <Categories categories={commonCategories} setTerm={setTerm} term={term} />
//       <Restaurants term={term} />
//       <StatusBar />
//     </View>
//   )
// }
