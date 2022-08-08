import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Pin from '../components/Pin';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Pin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
     justifyContent: 'center',
    padding: '10px',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  pin: {
    width: '100%',
  },
  logo: {
    width: '50%',
    height: '50%',
    borderRadius: 20,
  },
});
