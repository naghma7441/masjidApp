import React from 'react';
import {FlatList, StyleSheet, View, Text, Image} from 'react-native';
import CONSTANT from '../../constants';
import {Icon} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const upData = [
  {
    id: 1,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 2,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 3,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 4,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 4,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 4,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 4,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
];
const feauredData = [
  {
    id: 1,
    image: CONSTANT.App.screenImages.base,
    title: 'Eid ul Adha 2021 | Gro...',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 2,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 3,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 4,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 4,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 4,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
  {
    id: 4,
    image: CONSTANT.App.screenImages.blue_masjid,
    title: 'Event Name',
    date: '12 Aug',
    time: '10:20 PM - 3:00 AM',
    action: 'Register',
  },
];
const DataList = [
  {
    id: 1,
    image: require('../../assets/images/video.png'),
    title: 'Speech | Ikhlaak E Hasna',
    date: '10 min ago',
    time: '1 hour 23 min',
    action: 'Watch Now',
  },
  {
    id: 2,
    image: require('../../assets/images/naat.png'),
    title: 'Kids naat',
    date: '10 min ago',
    time: '1 hour 23 min',
    action: 'Watch Now',
  },
];

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: 28,
    borderRadius: 10,
    height: 115,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
export const UpEventListComp = ({showData, navigation, handleRefresh}) => {
  // const onHandler=(item)=>{
  //     console.log("item",item)

  // }
  return (
    <>
      <FlatList
        data={showData ? DataList : upData}
        onRefresh={() => {
          // alert('he');
        }}
        refreshing={false}
        renderItem={({item}) => {
          return (
            <View>
              <ScrollView vertical={true}>
                <TouchableOpacity
                  style={styles.container}
                  onPress={() => {
                    navigation.navigate(CONSTANT.App.screenNames.eventDetail);
                  }}>
                  <Image
                    source={item.image}
                    style={{width: '30%', height: '100%'}}
                  />

                  <View style={{width: '70%', height: '100%', padding: 10}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginTop: 10,
                      }}>
                      <Icon name="clock" type="evilicon" color="#9D9D9D" />
                      <Text style={{marginLeft: 5, color: '#9D9D9D'}}>
                        {item.date}
                      </Text>
                      <Text style={{color: '#9D9D9D', marginLeft: 5}}>|</Text>
                      <Text style={{color: '#9D9D9D', marginLeft: 5}}>
                        {item.time}
                      </Text>
                    </View>
                    <Text
                      style={{fontSize: 20, color: '#A7C829', marginTop: 10}}>
                      {item.action}
                    </Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          );
        }}
        keyExtractor={(item, index) => item.key}
      />
    </>
  );
};

export const FeaturedEventListComp = ({
  showData,
  navigation,
  handleRefresh,
}) => {
  // const onHandler=(item)=>{
  //     console.log("item",item)

  // }
  return (
    <>
      <FlatList
        data={showData ? DataList : feauredData}
        onRefresh={() => {
          alert('he');
        }}
        refreshing={false}
        renderItem={({item}) => {
          return (
            <View>
              <ScrollView vertical={true}>
                <TouchableOpacity
                  style={styles.container}
                  onPress={() => {
                    navigation.navigate(CONSTANT.App.screenNames.eventDetail);
                  }}>
                  <Image
                    source={item.image}
                    style={{width: '30%', height: '100%'}}
                  />

                  <View style={{width: '70%', height: '100%', padding: 10}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginTop: 10,
                      }}>
                      <Icon name="clock" type="evilicon" color="#9D9D9D" />
                      <Text style={{marginLeft: 5, color: '#9D9D9D'}}>
                        {item.date}
                      </Text>
                      <Text style={{color: '#9D9D9D', marginLeft: 5}}>|</Text>
                      <Text style={{color: '#9D9D9D', marginLeft: 5}}>
                        {item.time}
                      </Text>
                    </View>
                    <Text
                      style={{fontSize: 20, color: '#A7C829', marginTop: 10}}>
                      {item.action}
                    </Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          );
        }}
        keyExtractor={(item, index) => item.key}
      />
    </>
  );
};
