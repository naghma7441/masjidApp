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
import {AntDesigns} from '../../constants/Icons';

 const EventDetailScreen = ({navigation}) => {
  return (
    <BackgroundImage
      source={CONSTANT.App.screenImages.bg_Image}
      style={{flex: 1}}>
      <View>
        <Image source={CONSTANT.App.screenImages.masjid} style={styles.banner} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            bottom: 250,
          }}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={25} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box1}
            // onPress={() => navigation.goBack()}
          >
            <AntDesigns name="sharealt" size={22} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>Eid ul Adha 2021 | Group Qurbani</Text>
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
            left: 20,
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
            }}>
            12 Aug |
          </Text>
          <Text
            style={{
              color: '#9d9d9d',
              fontSize: 12,
              lineHeight: 14.5,
              fontWeight: '500',
            }}>
            10:20 PM -
          </Text>
          <Text
            style={{
              color: '#9d9d9d',
              fontSize: 12,
              lineHeight: 14.5,
              fontWeight: '500',
            }}>
            03:00 AM
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            right: 15,
          }}>
          <Text
            style={{
              color: '#a7c829',
              fontSize: 12,
              lineHeight: 14.5,
              fontWeight: '500',
              right: 5,
            }}>
            Add to
          </Text>
          <AntDesign
            name="calendar"
            style={{
              color: '#a7c829',
              width: 14,
              height: 14,
              fontSize: 14,
              lineHeight: 14.5,
              fontWeight: '500',
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 20,
            top: 25,
            padding: 17,
          }}>
          Qurbani, udhiyah in Arabic, means sacrifice. Every Eid ul-Adha,
          Muslims sacrifice a goat, sheep, cow or camel – or pay to have one
          slaughtered on their behalf. The act honours the Prophet Ibrahim’s
          willingness to sacrifice his son Ismail in obedience to God. By making
          qurbani, Muslims demonstrate their obedience to Allah. At least one
          third of the meat from the animal should go to people who are poor or
          in vulnerable situations.
        </Text>
        <CustomButton
          // variant={"filled"}
          title={'Register'}
          onPress={() => navigation.navigate(CONSTANT.App.screenNames.signup)}
          style={{
            width: '90%',
            marginLeft: 20,
            borderWidth: 1,
            backgroundColor: '#A7C829',
            marginTop: 30,
            // bottom: '55%',
          }}
        />
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    top: 2,
    left: 24,
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

export default EventDetailScreen;