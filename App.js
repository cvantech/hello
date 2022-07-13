import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}
      >This is my first App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 25,
    fontWeight: "bold", 
  }
});


