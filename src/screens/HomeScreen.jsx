import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Restaurants from '../components/Restaurants'
import Search from '../components/Search'

export default function HomeScreen() {
  const [term, setTerm] = useState('Burger')

  const commonCategories = [
    {
      name: 'Burger',

      imgUrl: require('../assets/categoryImg/burger.png'),
    },
    {
      name: 'Pizza',
      imgUrl: require('../assets/categoryImg/pizza.png'),
    },
    {
      name: 'Dessert',
      imgUrl: require('../assets/categoryImg/cake.png'),
    },
    {
      name: 'Drinks',
      imgUrl: require('../assets/categoryImg/smoothies.png'),
    },
    {
      name: 'Steak',
      imgUrl: require('../assets/categoryImg/steak.png'),
    },
    {
      name: 'Pasta',
      imgUrl: require('../assets/categoryImg/pasta.png'),
    },
  ]

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories categories={commonCategories} setTerm={setTerm} term={term} />
      <Restaurants term={term} />
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(253,253,253)',
    flex: 1,
  },
})
