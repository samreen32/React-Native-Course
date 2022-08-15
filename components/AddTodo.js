import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native'; 


export default function AddTodo ({submitTodoHandler}) {

    const [text, setText] = useState('');

    //funtion
    const changeHandler =(val)=>{       //parameter passing
        setText(val);
    }


    return (
        <View>
            <TextInput style={styles.input} placeholder='new todo...' onChangeText={(val)=>changeHandler(val)}/>     {/*so that parameter must pass to this function as well */}
            <Button onPress={()=>submitTodoHandler(text)} title='set todo' color='coral'/>
        </View>
       
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});