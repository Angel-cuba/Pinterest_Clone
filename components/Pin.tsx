import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Pin = () => {
  return (
    <View style={styles.pin}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1658247594/Personal%20/Angel_NON-bg_mgyvrs.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Hello</Text>
    </View>
  );
};

export default Pin;
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
    margin: 10,
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
