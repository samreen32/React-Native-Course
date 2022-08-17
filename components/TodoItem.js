import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';  //'TouchableOpacity' for text to make touchable.
import { MaterialIcons } from '@expo/vector-icons';     //from expo icons.


export default function TodoItem ({ item, pressHandler }) {       //destructuring props from app.js.
    
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={20} color="black" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  item: {
      flexDirection: 'row',
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 10
  },
  itemText: {
    marginLeft: 10,
  }
});