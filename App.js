import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View , FlatList, Alert} from 'react-native';    //reactnative supports button view which is self closing tag.
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App () {


  //For Mini Project
  const [todo, setTodo] = useState([
    {text: 'Buy Coffee', key: '1'},
    {text: 'Create an App', key: '2'},
    {text: 'Play on the Switch', key: '3'}
  ]);



  //function for Mini Project  
  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key );   //deleting todo list item by clicking on it.
    });
  }



  //function for Mini Project to submit the Todo form
  const submitTodoHandler =(text)=> {

    if(text.length > 3) {      //check if user enter text less than 3 words, it would not add an item to todo list and will show alert.
      setTodo ((prevTodo) => {
        return [
          {text : text, key: Math.random().toString()}, ...prevTodo]        //...prevTodo uses the seperate operator and it would separate the old array of setTodo and separate them it into this currrent array.
      })
    }
    else {
      Alert.alert('OOPS', 'Must enter more than 3 chars long word', [
        {text: 'Understood', onPress: ()=>console.log("Alert Closed")}]  
      )  //alert arguments: alert title, description and an array which consists of diff objects.
    }
   
  }



  return (
    
    /* Introduction */
    <View style={styles.container}>   
   
      {/*............................ Mini Project ............................ */}

      {/* Header */}  
      <Header />
      <View style={styles.content}>
        {/* To Form */}
        <AddTodo submitTodoHandler={submitTodoHandler}/>
        <View style={styles.list}>
            <FlatList data={todo} 
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler}/>   //passing props
              )}
            />
        </View>
      </View>   

      <StatusBar style="auto" />
    </View>
      
  );
}



const styles = StyleSheet.create({      //Creating stylesheet
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 20,
    marginHorizontal: 20
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});


//React native does not support CSS, it emulate the idea of CSS e.g. cannot write class = "container" instead write 'style={styles.container}'
//where styles is const which is equal to StyleSheet.
//Child <Text> component inherits the parent <Text> component properties.