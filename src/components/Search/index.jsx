import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { elevation } from '../../common/styles';

export default function Search(props) {
  const [input, setInput] = useState('');
  const { setTerm } = props;

  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput('');
  };

  return (
    <View style={[styles.container, elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        placeholder="Restaurant, food"
        value={input}
        style={styles.input}
        onChangeText={(text) => {
          setInput(text);
        }}
        onEndEditing={handleEndEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: 'white',

    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
