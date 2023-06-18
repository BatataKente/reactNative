import {Text, TextInput, View} from "react-native"
import {styles} from "./Tutorial_3_Styles"
import {useState} from 'react'

export function Tutorial_3() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Enter name:</Text>
            <TextInput multiline
                onChangeText={text => setName(text)}
                placeholder="lero lero"
                style={styles.textInput}/>
            <Text style={styles.text}>Enter age:</Text>
            <TextInput
                keyboardType="numeric"
                onChangeText={text => setAge(text)}
                placeholder="lero lero"
                style={styles.textInput}/>
            <Text style={styles.text}>
                name: {name || 'Josicleison'}, age: {age || 12}
            </Text>
        </View>
    )
}