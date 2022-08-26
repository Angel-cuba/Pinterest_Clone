import { View, Text, StyleSheet, Image, Pressable, Platform, SafeAreaView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Pin = ({ item }: any) => {
  const { id, image, title } = item;

  const [ratio, setRatio] = React.useState(1);
  const navigation = useNavigation();

  const onLikes = () => {
    console.log('onLikes');
  };

  React.useEffect(() => {
    Image.getSize(image, (width, height) => {
      setRatio(width / height);
    });
  }, [image]);
  const goingToPinPage = () => {
    navigation.navigate('Pin', { id });
  };
  return (
    <Pressable onPress={goingToPinPage} style={styles.root}>
      <View style={styles.pin}>
        <View style={styles.image}>
          <Image
            source={{
              uri: image,
            }}
            style={[
              styles.logo,
              {
                aspectRatio: ratio,
              },
            ]}
          />
          <Pressable onPress={onLikes} style={styles.heartButton}>
            <AntDesign name="hearto" size={20} color="black" />
          </Pressable>
        </View>

        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Pin;
const styles = StyleSheet.create({
  root: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  pin: {
    width: '100%',
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 5,
    paddingLeft: 25,
  },
  image: {
    width: '100%',
    height: 200,
  },
  logo: {
    height: '100%',
    borderRadius: 20,
  },
  heartButton: {
    backgroundColor: '#D3CFD4',
    position: 'absolute',
    bottom: 10,
    left: 15,
    borderRadius: 50,
    padding: 4,
  },
});
