import React from 'react';
import {FlatList, StyleSheet, View, Text, Image} from 'react-native';
import CONSTANT from '../../constants';
import {Icon} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const newAnnounceData = [
  {
    id: 1,
    title: 'Announcement one',
    desc: "Hello folks! We are going to conduct a session on Scrum and it's process. Details will be posted soon.",
  },
  {
    id: 2,
    title: 'Announcement two ',
    desc: "Hello folks! We are going to conduct a session on Scrum and it's process. Details will be posted soon.",
  },
  {
    id: 3,
    title: 'Announcement three ',
    desc: "Hello folks! We are going to conduct a session on Scrum and it's process. Details will be posted soon.",
  },
  {
    id: 4,
    title: 'Announcement four ',
    desc: "Hello folks! We are going to conduct a session on Scrum and it's process. Details will be posted soon.",
  },
];
const featuredAnnounceData = [
  {
    id: 1,
    title: 'Announcement five',
    desc: "Hello folks! We are going to conduct a session on Scrum and it's process. Details will be posted soon.",
  },
  {
    id: 2,
    title: 'Announcement six ',
    desc: "Hello folks! We are going to conduct a session on Scrum and it's process. Details will be posted soon.",
  },
  {
    id: 3,
    title: 'Announcement seven',
    desc: "Hello folks! We are going to conduct a session on Scrum and it's process. Details will be posted soon.",
  },
  {
    id: 4,
    title: 'Announcement eight ',
    desc: "Hello folks! We are going to conduct a session on Scrum and it's process. Details will be posted soon.",
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
    backgroundColor: '#515151',
    marginTop: 28,
    borderRadius: 10,
    height: 135,
    flexDirection: 'row',
  },
  announceBox: {
    height: 125,
    borderRadius: 10,
    width: 337,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: 15,
    left: 13,
    // position: 'absolute',
  },
  title: {
    color: '#a7c829',
    fontSize: 20,
    fontWeight: '600',
    top: 5,
    left: 14,
    right: 279,
  },
  banner: {
    width: '100%',
    height: 310,
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#515151',
    alignItems: 'center',
    justifyContent: 'center',
    left: 5,
  },
});
export const NewAnnounce = ({showData, navigation, handleRefresh}) => {
  return (
    <>
      <FlatList
        style={{overflow: 'hidden'}}
        data={newAnnounceData}
        onRefresh={() => {}}
        showsVerticalScrollIndicator={false}
        refreshing={false}
        renderItem={({item}) => {
          return (
            <ScrollView
              vertical={true}
              showsVerticalScrollIndicator={false}
              style={{overflow: 'hidden'}}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  navigation.navigate(CONSTANT.App.screenNames.AnnounceDetail);
                }}>
                <View style={styles.announceBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      top: 15,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        color: '#9D9D9D',
                        left: 18,
                        bottom: 5,
                      }}>
                      <AntDesign
                        name="clockcircleo"
                        style={{
                          color: '#9d9d9d',
                          fontSize: 12,
                          lineHeight: 14.5,
                          fontWeight: '500',
                        }}
                      />
                      <Text
                        style={{
                          color: '#9d9d9d',
                          fontSize: 12,
                          lineHeight: 14.5,
                          fontWeight: '500',
                          left: 10,
                        }}>
                        3 hour ago
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 17,
                      color: '#fff',
                      fontWeight: 'normal',
                      fontStyle: 'normal',
                      bottom: 1,
                      width: 323,
                      height: 51,
                      top: 18,
                      left: 14,
                    }}>
                    Hello folks! We are going to conduct a session on Scrum and
                    it's process. Details will be posted soon.
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          );
        }}
        keyExtractor={(item, index) => item.key}
      />
    </>
  );
};
export const FeaturedAnnounce = ({showData, navigation, handleRefresh}) => {
  return (
    <>
      <FlatList
        style={{overflow: 'hidden'}}
        data={featuredAnnounceData}
        onRefresh={() => {
          alert('he');
        }}
        showsVerticalScrollIndicator={false}
        refreshing={false}
        renderItem={({item}) => {
          return (
            <ScrollView
              vertical={true}
              showsVerticalScrollIndicator={false}
              style={{overflow: 'hidden'}}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  navigation.navigate(CONSTANT.App.screenNames.AnnounceDetail);
                }}>
                <View style={styles.announceBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      top: 15,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        color: '#9D9D9D',
                        left: 18,
                        bottom: 5,
                      }}>
                      <AntDesign
                        name="clockcircleo"
                        style={{
                          color: '#9d9d9d',
                          fontSize: 12,
                          lineHeight: 14.5,
                          fontWeight: '500',
                        }}
                      />
                      <Text
                        style={{
                          color: '#9d9d9d',
                          fontSize: 12,
                          lineHeight: 14.5,
                          fontWeight: '500',
                          left: 10,
                        }}>
                        3 hour ago
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 17,
                      color: '#fff',
                      fontWeight: 'normal',
                      fontStyle: 'normal',
                      bottom: 1,
                      width: 323,
                      height: 51,
                      top: 18,
                      left: 14,
                    }}>
                    Hello folks! We are going to conduct a session on Scrum and
                    it's process. Details will be posted soon.
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          );
        }}
        keyExtractor={(item, index) => item.key}
      />
    </>
  );
};
