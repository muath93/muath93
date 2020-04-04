import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import uuid from 'uuid-random';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Juice' }
  ]);

  const deleteItem = id => {
    const newItems = items.filter(item => item.id !== id);

    setItems(newItems);
  };

  const addItem = text => {
    if (text) {
      const newItem = {
        id: uuid(),
        text
      };

      setItems(() => [...items, newItem]);
    } else {
      Alert.alert('Error', 'Please enter an item');
    }
  };

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  text: {
    color: 'red',
    fontSize: 30
  }
});

export default App;
