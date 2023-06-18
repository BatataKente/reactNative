import {Text, View} from 'react-native'
import {styles} from './Tutorial_2_Styles'
import {useState} from 'react'

export function Tutorial_2() {
  const [name, setName] = useState('Josicleison')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}></Text>
      <View style={styles.buttonContainer}>
        
      </View>
    </View>
  )
}
