import {Text, View} from 'react-native'
import {styles} from './Tutorial_1_Styles'

export function Tutorial_1() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Lero lero</Text>
      </View>
      <View style={styles.body}>
        {
          [123123123123,2,3,4,5,6,7,8].map(
            $0 => <Text style={styles.boldText}>
              <Text>{$0}</Text>
            </Text>
          )
        }
      </View>
    </View>
  )
}
