import { View, Text, Image, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import React from 'react';
import pins from '../assets/dummyData/data';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

type Data = {
  id: number;
  title: string;
  image: string;
};

const PinScreen = () => {
  const [ratio, setRatio] = React.useState(1);
  const navigation = useNavigation()
  const route = useRoute()

  React.useEffect(() => {
    if (pin.image) {
      Image.getSize(pin.image, (width, height) => {
        setRatio(width / height);
      });
    }
  }, [pins]);

  const pinId = route.params?.id 
  const pin = pins.find(p => p.id === pinId) as Data
  const onBack = () => {
    navigation.goBack()
  };
  const insets = useSafeAreaInsets();

if(!pin) {
  return <Text>Pin not found</Text>
}


  return (
    <SafeAreaView style={{ backgroundColor: '#000' }}>
      <StatusBar style="light" />
      <View style={styles.root}>
        <Image source={{ uri: pin.image }} style={[styles.image, { aspectRatio: ratio }]} />
        <Text style={styles.title}>{pin.title}</Text>
      </View>
      <Pressable onPress={onBack} style={[styles.backButton, { top: insets.top + 20 }]}>
        <Ionicons name={'chevron-back'} size={30} color={'#fff'} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  image: {
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    lineHeight: 30,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
});

export default PinScreen;
