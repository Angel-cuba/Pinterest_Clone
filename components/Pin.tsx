import { View, Text, StyleSheet, Image, Pressable, Platform, SafeAreaView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Pin = ({ item }: any) => {
  const { image, title } = item;

  const [ratio, setRatio] = React.useState(1);

  const onLikes = () => {
    console.log('onLikes');
  };

  React.useEffect(() => {
    Image.getSize(image, (width, height) => {
      setRatio(width / height);
    });
  }, [image]);
  return (
    <SafeAreaView style={styles.root}>
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
    </SafeAreaView>
  );
};

export default Pin;
const styles = StyleSheet.create({
  root: {
    //  backgroundColor: '#000000',
     borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // height: '100%',
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
  logo: {
    height: 200,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
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
