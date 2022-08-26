import { FlatList, Image, ScrollView, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import Pin from '../components/Pin';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import picsData from '../assets/dummyData/data'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const image = 'https://res.cloudinary.com/dqaerysgb/image/upload/v1650308582/img-1_j6xpxv.jpg';
  const image1 =
    'https://res.cloudinary.com/dqaerysgb/image/upload/v1635399087/Cuban-Food-1_mydd1f.jpg';
  const title1 = 'The best place to find a job';
  const title = 'AngelDev';

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <FlatList
        data={picsData}
        renderItem={({ item }) => <Pin item={item}/>}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: '100%',
    // backgroundColor: '#e41111',
    // alignItems: 'center',
    // justifyContent: 'center',
    // // padding: 1,
  },
  scroll: {
    // backgroundColor: '#e41111',
  }
});
