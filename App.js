import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bai1 from './src/Bai1'
import Bai2 from './src/Bai2'
import Bai3 from './src/Bai3'
import Bai4 from './src/Bai4'
import Bai5 from './src/Bai5'
import Bai6 from './src/Bai6'
import Bai7 from './src/Bai7'
import Bai8 from './src/Bai8'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Bai7></Bai7> */}
      <Bai8></Bai8>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
