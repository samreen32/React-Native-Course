import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';    //reactnative supports button view which is self closing tag.


export default function App() {

  const [name, setName] = useState("samreen");    //using the useState hook
  const [person, setPerson] =useState({name: 'Chanyeol', age: 30});


  //function
  const myButton = () =>{
    setName('Simran Simran');
    setPerson({name: 'maryum', age: 20});
  }

  return (
    <View style={styles.container}>   {/*..View in native is same as div component and 'style={}' is same as 'className={}'.... */}
      <View style={styles.header}>
        <Text style={styles.boldText}>Header</Text> 
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        <Text>Asperiores blanditiis quaerat harum accusamus illum soluta ipsam a magnam et maxime </Text>
        <Text>deserunt, ratione eligendi veniam voluptatum aliquam repellat iusto inventore? Consectetur.</Text>
        </Text>
      </View>


     
      <Text>My name is {name}</Text>
      <Text>Person name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={myButton}/>    {/*We cannot add styles property to button directly, not allowed. */}
      </View>     
  


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({      //Creating stylesheet
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  },
  buttonContainer: {
    marginTop: 20,
  }
});


//React native does not support CSS, it emulate the idea of CSS e.g. cannot write class = "container" instead write 'style={styles.container}'
//where styles is const which is equal to StyleSheet.
//Child <Text> component inherits the parent <Text> component properties.