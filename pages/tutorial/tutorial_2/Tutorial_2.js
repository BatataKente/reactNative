import {Button, Text, View} from 'react-native'
import {styles} from './Tutorial_2_Styles'
import {useState} from 'react'

export function Tutorial_2() {
  const [name, setName] = useState('Josicleison')
  const [person, setPerson] = useState(
    {
      name: 'mario',
      age: 40
    }
  )
  const buttonOnPressHandler = () => {
    setName('Alfredo')
    setPerson({name: 'Luigi', age: 43})
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>
        Hes name is {person.name} and his age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button 
          onPress={buttonOnPressHandler}
          title='update state'/>
      </View>
    </View>
  )
}
