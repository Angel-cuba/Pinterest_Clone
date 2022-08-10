import { Image, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Pin from '../components/Pin';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const image = 'https://res.cloudinary.com/dqaerysgb/image/upload/v1650308582/img-1_j6xpxv.jpg';
  const image1 =
    'https://res.cloudinary.com/dqaerysgb/image/upload/v1635399087/Cuban-Food-1_mydd1f.jpg';
  const title1 = 'The best place to find a job';
  const title = 'Angel';

  return (
    <ScrollView>
      <View style={styles.container}>
        <Pin image={image} title={title} />
        <Pin image={image1} title={title1} />
        <Pin image={"https://res.cloudinary.com/dqaerysgb/image/upload/v1635267338/restaurat-bar_m41i8l.jpg"} title={title1} />
        <Pin image={"https://res.cloudinary.com/dqaerysgb/image/upload/v1635360679/italian-food_jsa7c0.jpg"} title={title1} />
        <Pin image={image1} title={title1} />
        <Pin image={image1} title={title1} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
