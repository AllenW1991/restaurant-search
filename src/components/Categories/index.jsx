import { FlatList } from 'react-native';
import CategoryItem from '../Category';

export default function Categories(props) {
  const { categories, setTerm, term } = props;
  return (
    <FlatList
      data={categories}
      renderItem={({ item, index }) => {
        return (
          <CategoryItem
            name={item.name}
            imgUrl={item.imgUrl}
            index={index}
            active={item.name === term}
            handlePress={() => {
              setTerm(item.name);
            }}
          />
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.name}
    />
  );
}
