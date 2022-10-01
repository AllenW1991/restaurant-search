import { View, Text, StyleSheet } from 'react-native';
import yelpAPI from '../../api/yelp';

export default function Restaurants() {
  const searchRestaurants = async () => {
    const res = await yelpAPI.get('/search', {
      params: {
        limit: 15,
        term: 'Dessert',
        location: 'Toronto',
      },
    });
    console.log(res);
  };

  searchRestaurants();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 10,
    height: 100,
    backgroundColor: 'firebrick',
  },
});