import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; 

export default function SandBoxOrFlexBox () {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    );
}


const styles = StyleSheet.create({      //Creating stylesheet
    container: {
     // flex: 1,                    //meaning it will cover whole the page.
      flexDirection: 'row',      // in which direction flexbox will be 'row' or in 'column'.
      justifyContent: 'space-around',
      alignContent: 'flex-end',
      paddingTop: 40,
      backgroundColor: '#ddd',
    },
    boxOne: {
        flex: 1,    
        backgroundColor: 'violet',
        padding: 10
    },
    boxTwo: {
        flex: 2,    
        backgroundColor: 'pink',
        padding: 20
    },
    boxThree: {
        flex: 1,    
        backgroundColor: 'skyblue',
        padding: 30
    },
    boxFour: {
        flex: 1,    
        backgroundColor: 'purple',
        padding: 40
    },
});  