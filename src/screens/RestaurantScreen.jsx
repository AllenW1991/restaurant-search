import { Dimensions, FlatList, Image, Text, View } from 'react-native'
import { useEffect } from 'react'
import useRestaurant from '../hooks/useRestaurant'

export default function RestaurantScreen({ navigation }) {
  const [{ data, loading, error }, searchRestaurant] = useRestaurant()
  const id = navigation.getParam('id')
  const dimensions = Dimensions.get('window')
  const imgWidth = dimensions.width
  const imgHeight = Math.round((imgWidth * 9) / 16)

  useEffect(() => {
    searchRestaurant(id)
  }, [])

  if (loading) return <Text>Lodaing...</Text>
  if (error) return <Text>{error}</Text>

  return (
    <View>
      <FlatList
        data={data?.photos}
        keyExtractor={(item) => {
          return item
        }}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ height: imgHeight, width: imgWidth }}
          />
        )}
      ></FlatList>
    </View>
  )
}
