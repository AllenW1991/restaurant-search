import { View, Text, StyleSheet, Image } from 'react-native'

import { elevation } from '../../common/styles'

export default function CategoryItem() {
  return (
    <View style={[styles.container, elevation]}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/categoryImg/burger.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.header}>Burger</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    marginVertical: 15,
    marginHorizontal: 25,
    backgroundColor: 'rgb(241,186,87)',
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    heightc: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    fontWeight: 'bold',
  },
})
