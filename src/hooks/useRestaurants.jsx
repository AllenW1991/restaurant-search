import { useState } from 'react'
import yelpAPI from '../api/yelp'

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  })
  const searchRestaurant = async (term) => {
    setResults({ data: null, loading: true, error: null })

    try {
      const res = await yelpAPI.get('/search', {
        params: {
          limit: 10,
          term,
          location: 'Toronto',
        },
      })

      setResults({ data: res.data.businesses, loading: false, error: null })
    } catch (err) {
      setResults({
        data: null,
        loading: false,
        error: `Something went wrong : ${err}`,
      })
    }
  }
  return [results, searchRestaurant]
}
