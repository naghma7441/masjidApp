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
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import {EventListComp} from '../../component/List/EventList';
import MoreScreen from '../More';

const Services = ({navigation}) => {
  const Data = [
    {
      id: 1,
      name: 'New Muslim',
      Icon_Name: 'mic',
      bgColor: '#20BBD4',
      type: 'feather',
      Screen: CONSTANT.App.screenNames.servicesDetail,
    },
    {
      id: 2,
      name: 'Ask Imam',
      Icon_Name: 'mic',
      bgColor: '#DFBB2B',
      type: 'feather',
      Screen: CONSTANT.App.screenNames.servicesDetail,
    },
    {
      id: 3,
      name: 'Weekend School',
      Icon_Name: 'mic',
      bgColor: '#A758EB',
      type: 'feather',
      Screen: CONSTANT.App.screenNames.servicesDetail,
    },
    {
      id: 4,
      name: 'Marriage Services',
      Icon_Name: 'mic',
      bgColor: '#DF6C2B',
      type: 'feather',
      Screen: CONSTANT.App.screenNames.servicesDetail,
    },
    {
      id: 5,
      name: 'Ramsan Services',
      Icon_Name: 'mic',
      bgColor: '#5E5E5E',
      type: 'feather',
      Screen: CONSTANT.App.screenNames.servicesDetail,
    },
    {
      id: 6,
      name: 'Cunsultation',
      Icon_Name: 'mic',
      bgColor: '#A7C829',
      type: 'feather',
      Screen: CONSTANT.App.screenNames.servicesDetail,
    },
    {
      id: 7,
      name: 'Funeral Services',
      Icon_Name: 'mic',
      bgColor: '#A7C5',
      type: 'feather',
      Screen: CONSTANT.App.screenNames.servicesDetail,
    },
  ];

  return (
    <BackgroundImage
      source={CONSTANT.App.screenImages.bg_Image}
      style={{flex: 1}}>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 40}}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={25} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.title}>Services</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 110,
            marginTop: 21,
            marginLeft: -10,
          }}>
          {Data.map(item => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: 10,
                  marginLeft: 20,
                  width: '10%',
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: 30,
                    // justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={props =>
                      navigation.navigate(item.Screen, {
                        screen: CONSTANT.App.screenNames.services,
                        initial: false,
                      })
                    }
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: item.bgColor,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 15,
                      //   marginTop: '-10%',
                    }}
                    key={item.id}>
                    <Icon
                      name={item.Icon_Name}
                      type={item.type}
                      size={15}
                      color="#FFFFFF"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.Screen)}
                    style={{
                      width: 120,
                      marginTop: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: -10,
                      width: 200,
                    }}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontWeight: '400',
                        fontSize: 16,
                        width: 150,
                        display: 'flex',
                        textAlign: 'left',
                        paddingRight: 20,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      {/* </View> */}
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    top: 3,
    left: 110,
    right: 279,
    bottom: 748,
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
    left: 20,
  },
});

export default Services;
