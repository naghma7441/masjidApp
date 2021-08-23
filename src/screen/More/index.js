import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import CustomHeader from '../../component/CustomHeader';
import CONSTANT from '../../constants';
import {Button, Icon, Overlay} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomInput from '../../component/InputFileds';
import {CheckBox} from 'react-native-elements';
import CustomButton from '../../component/CustomButton';
import {ListComp} from '../../component/List';
import {useDispatch} from 'react-redux';
import {createAction} from '../Login/action';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationApp} from '../../navigation/navigation';
import {AuthContext} from '../../context';
import {BgImage} from '../../component/ImageContainer';
import {BackgroundImage} from 'react-native-elements/dist/config';
import Carousel from 'react-native-looped-carousel';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {EventListComp} from '../../component/List/EventList';

const MoreScreen = ({navigation}) => {
  const Data1 = [
    {
      id: 1,
      name: 'Services',
      Icon_Name: 'server',
      bgColor: '#5E5E5E',
      type: 'font-awesome',
      screenName: CONSTANT.App.screenNames.services,
    },

    {
      id: 2,
      name: 'Events',
      Icon_Name: 'calendar',
      bgColor: '#20BBD4',
      type: 'feather',
      screenName: CONSTANT.App.tabMenu.eventTab,
    },
    {
      id: 3,
      name: 'Donate',
      Icon_Name: 'dollar-sign',
      bgColor: '#DFBB2B',
      type: 'feather',
      screenName: CONSTANT.App.screenNames.MoreScreen,
    },
  ];
  const Data2 = [
    {
      id: 4,
      name: 'New muslim support',
      Icon_Name: 'headphones',
      bgColor: '#A758EB',
      type: 'feather',
      screenName: CONSTANT.App.screenNames.MoreScreen,
    },
    {
      id: 5,
      name: 'Hadiths',
      Icon_Name: 'star',
      bgColor: '#DF6C2B',
      type: 'feather',
      screenName: CONSTANT.App.screenNames.HadeesScreen,
    },
    {
      id: 6,
      name: 'Setting',
      Icon_Name: 'settings',
      bgColor: '#A7C829',
      type: 'feather',
      screenName: CONSTANT.App.screenNames.SettingScreen,
    },
  ];
  const Data3 = [
    {
      id: 7,
      name: 'Quran',
      Icon_Name: 'book-open',
      bgColor: '#A75647',
      type: 'feather',
      screenName: CONSTANT.App.screenNames.QuranScreen,
    },
    {
      id: 8,
      name: 'Qibla direction',
      Icon_Name: 'compass',
      bgColor: '#B75790',
      type: 'entypo',
      screenName: CONSTANT.App.screenNames.QiblaScreen,
    },
    {
      id: 9,
      name: 'Quran Translation',
      Icon_Name: 'book-open',
      bgColor: '#D44563',
      type: 'feather',
      screenName: CONSTANT.App.screenNames.QuranTransScreen,
    },
  ];
  const Data4 = [
    {
      id: 10,
      name: 'Salah Time',
      Icon_Name: 'clock',
      bgColor: '#A7c865',
      type: 'feather',
      screenName: CONSTANT.App.tabMenu.prayerTab,
    },
    {
      id: 11,
      name: 'Contact Form',
      Icon_Name: 'user',
      bgColor: 'gray',
      type: 'feather',
      screenName: CONSTANT.App.screenNames.ContactForm

    },
    {
      id: 12,
      name: 'Contact List',
      Icon_Name: 'user',
      bgColor: 'gray',
      type: 'feather',
      screenName: CONSTANT.App.screenNames.ContactListScreen

    },
    
    
  ];

  return (
    <BgImage>
      <View style={styles.container}>
        <View style={styles.topContain}>
      <Text style={styles.title}>More</Text>
      </View>
      <ScrollView
          vertical={true}
          // contentContainerStyle={{paddingBottom: 100,}}
          showsVerticalScrollIndicator={false}
          style={{top:20}}
          >
        <View
          style={{
            height: 110,
            // marginTop: 71,
            marginLeft: -10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            
          }}>
          {Data1.map(item => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate(item.screenName)}>
                  <View
                    style={{
                      width: 65,
                      height: 65,
                      backgroundColor: item.bgColor,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 10,
                      //   marginTop: '-10%',
                    }}
                    key={item.id}>
                    <Icon
                      name={item.Icon_Name}
                      type={item.type}
                      size={22}
                      color="#FFFFFF"
                      onPress={() => navigation.navigate(item.screenName)}
                    />
                  </View>
                  <View
                    style={{
                      width: 70,
                      marginTop: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 10,
                    }}>
                    <Text style={{color: '#FFFFFF', fontWeight: '400'}}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      <View
        style={{
          height: 110,
          marginTop: 31,
          marginLeft: -10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
        {Data2.map(item => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate(item.screenName)}>
                <View
                  style={{
                    width: 65,
                    height: 65,
                    backgroundColor: item.bgColor,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                    //   marginTop: '-10%',
                  }}
                  key={item.id}>
                  <Icon
                    name={item.Icon_Name}
                    type={item.type}
                    size={22}
                    color="#FFFFFF"
                  />
                </View>
                <View
                  style={{
                    width: 70,
                    marginTop: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <Text style={{color: '#FFFFFF', fontWeight: '400'}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View
        style={{
          height: 110,
          marginTop: 31,
          marginLeft: -10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
        {Data3.map(item => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate(item.screenName)}>
                <View
                  style={{
                    width: 65,
                    height: 65,
                    backgroundColor: item.bgColor,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                    //   marginTop: '-10%',
                  }}
                  key={item.id}>
                  <Icon
                    name={item.Icon_Name}
                    type={item.type}
                    size={22}
                    color="#FFFFFF"
                  />
                </View>
                <View
                  style={{
                    width: 70,
                    marginTop: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <Text style={{color: '#FFFFFF', fontWeight: '400'}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View
        style={{
          height: 110,
          marginTop: 20,
          marginLeft: 25,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}>
        {Data4.map(item => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate(item.screenName)}>
                <View
                  style={{
                    width: 65,
                    height: 65,
                    backgroundColor: item.bgColor,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    // marginLeft: 10,
                    // marginTop: '-10%',
                  }}
                  key={item.id}>
                  <Icon
                    name={item.Icon_Name}
                    type={item.type}
                    size={22}
                    color="#FFFFFF"
                  />
                </View>
                <View
                  style={{
                    width: 70,
                    marginTop: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 10,
                  }}>
                  <Text style={{color: '#FFFFFF', fontWeight: '400'}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View></ScrollView>
      </View>
      
      </BgImage>  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // paddingHorizontal: 10,
    marginTop:10

    // overflow: 'hidden',
  },
  topContain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // top: 10,
    // height: 120,
    marginTop:10,
    marginBottom:20,
    overflow: 'hidden',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    left: 24,
    // right: 279,
    // bottom: 748,
  },
  banner: {
    width: '100%',
    height: 310,
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'rgba(81, 81, 81, .3)',
    alignItems: 'center',
    justifyContent: 'center',
    left: 20,
  },
  box1: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'rgba(81, 81, 81, .3)',
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
  },
});

export default MoreScreen;
