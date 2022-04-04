import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from './assets/warehouse.jpg';
import Stock from './components/Stock';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.base}>
      <Text style={{color: "#222", fontSize: 42, alignSelf: 'center'}}>Lager-Appen</Text>
      <Image source={warehouse} style={styles.background} />
      <Stock />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535f66',
  },
  background: {
    width: 405,
    height: 240,
    borderWidth: 2,
  },
  base: {
    flex: 1,
    backgroundColor: '#7b8f9b',
    paddingLeft: 12,
    paddingRight: 12,
  }
});
