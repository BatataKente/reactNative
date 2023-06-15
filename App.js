import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#111',
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      color: '#fff'
    }
  }
)

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        Lero lero
      </View>
    </View>
  )
}
