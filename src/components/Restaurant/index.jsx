import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { elevation } from '../../common/styles'

function Restaurant({ restaurant, navigation }) {
  const { image_url, name, rating, price, id } = restaurant

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Restaurant', { id: id })
      }}
    >
      <View style={[elevation, styles.container]}>
        <Image source={{ uri: image_url }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 100,
    borderRadius: 50,
    alignSelf: 'stretch',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    flexDirection: 'row',
  },
  rating: {
    marginRight: 20,
  },
  price: {
    color: 'gold',
  },
})

export default withNavigation(Restaurant)
