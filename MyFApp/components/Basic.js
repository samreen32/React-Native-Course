import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';    //reactnative supports button view which is self closing tag.


export default function Basic () {

  const [name, setName] = useState("samreen");    //using the useState hook
  const [person, setPerson] =useState({name: 'Chanyeol', age: 30});
  const [human, setHuman] = useState([
    {name: 'Beak', key: '1'},
    {name: 'Dani', key: '2'},
    {name: 'Youn', key: '3'}
  ]);

  //This is for FlatList as 'key' property is replaced with 'id'.
  const [being, setBeing] = useState([
    {name: 'Beak', id: '1'},
    {name: 'Dani', id: '2'},
    {name: 'Youn', id: '3'}
  ]);



  //function
  const myButton = () => {
    setName('Simran Simran');
    setPerson({name: 'maryum', age: 20});
  }


  
  return (

    /* Introduction */
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


     {/* Using the State */}
      <Text>My name is {name}</Text>
      <Text>Person name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={myButton}/>    {/*We cannot add styles property to button directly, not allowed. */}
      </View>     
  

      {/* Using TextInput */}
      <TextInput style={styles.input} placeholder='e.g. Jhon' 
                 onChangeText={(value) => setName(value)} multiline/>   {/*multiline allow the user to write in multiple lines. */}
      <TextInput style={styles.input} placeholder='e.g. 45' 
                 onChangeText={(value) => setAge(value)} keyboardType='numeric'/>



      {/* Using Lists and ScrollView */}           
      <Text>List Items Displayed as</Text>
      <ScrollView>
        {human.map((item)=>{
          return(
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
          );
        })}
      </ScrollView>


      {/* Flat List... FlatList contain data and renderItem(used to render the template for each item) props and destructuring the 'item' property .. Flat List is prefferable for larger lists*/}
      {/*For flat list 'key' property works but if we dont have key in our array rather we have an 'id' then it throughs an error. For solving this use 'Keyextractor' in your flatList. */}
        <FlatList 
          keyExtractor={(item) => item.id } 
          numColumns={2}
          data={being} 
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
          )}
        />    

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
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    margin: 8,
    padding: 10, 
    width: 200
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 20,
    marginHorizontal: 20
  },
  
});


//React native does not support CSS, it emulate the idea of CSS e.g. cannot write class = "container" instead write 'style={styles.container}'
//where styles is const which is equal to StyleSheet.
//Child <Text> component inherits the parent <Text> component properties.