import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import CustomButton from '../../component/CustomButton';
import {BgImage} from '../../component/ImageContainer';
import Carousel from 'react-native-looped-carousel';
import messaging from '@react-native-firebase/messaging';

import CONSTANT from '../../constants';
import {NavigationApp} from '../../navigation/navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const OnBoardingScreen = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [layoutStyle, setLayoutStyle] = React.useState({
    width: width,
    height: '40%',
  });

  // useEffect(() => {
  // }, []);

  const onPress = () => {};
  return (
    <BgImage>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.card1}>
            <Image
              source={CONSTANT.App.screenImages.logo}
              style={styles.logo}
            />
          </View>
          <Carousel
            //   delay={2000}
            style={[layoutStyle, {marginBottom: 100, overflow: 'hidden'}]}
            autoplay={false}
            //   pageInfo
            pagingEnabled
            bullets={true}
            chosenBulletStyle={{
              backgroundColor: '#fff',
              color: 'white',
              fontSize: 20,
              width: 14,
              height: 14,
            }}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
            bulletStyle={{
              backgroundColor: '#b3afaf',
              borderWidth: 0,
              borderWidth: 0,
              color: 'white',
              height: 14,

              width: 14,
            }}
            bulletsContainerStyle={{
              marginRight: 10,
              bottom: '0%',

              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'rgba(157, 157, 157, 0.2)',
              backgroundColor: 'rgba(157, 157, 157, 0.2)',
              width: '10%',
              height: '10%',
              marginLeft: '25%',
              borderRadius: 20,
            }}>
            <View
              style={[
                layoutStyle,
                {
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              ]}>
              <Text style={styles.donation}>Donation Management</Text>
              <Text
                style={{
                  color: '#9D9D9D',
                  fontSize: 14,
                  textAlign: 'center',
                  // marginTop: 20,
                  // paddingRight: 65,
                  paddingHorizontal: 60,
                  // flexWrap: 'wrap',
                  width: '100%',
                  right: 50,
                  // bottom: 20,
                  // marginBottom: 20,
                }}>
                Aliquam erat volutpat. Vestibulum facilisis, ante ac fermevntum
                ornare, ipsum dui convallis ex.
              </Text>
            </View>
            <View
              style={[
                layoutStyle,
                {
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              ]}>
              <Text style={styles.donation}>Donation Management</Text>
              <Text
                style={{
                  color: '#9D9D9D',
                  fontSize: 14,
                  textAlign: 'center',
                  // marginTop: 20,
                  // paddingRight: 65,
                  paddingHorizontal: 60,
                  // flexWrap: 'wrap',
                  width: '100%',
                  right: 20,
                  // bottom: 20,
                }}>
                Aliquam erat volutpat. Vestibulum facilisis, ante ac fermevntum
                ornare, ipsum dui convallis ex.
              </Text>
            </View>
            <View
              style={[
                layoutStyle,
                {
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              ]}>
              <Text style={styles.donation}>Donation Management</Text>
              <Text
                style={{
                  color: '#9D9D9D',
                  fontSize: 14,
                  textAlign: 'center',
                  // marginTop: 20,
                  // paddingRight: 65,
                  paddingHorizontal: 60,
                  // flexWrap: 'wrap',
                  width: '100%',
                  right: 20,
                  // bottom: 20,
                }}>
                Aliquam erat volutpat. Vestibulum facilisis, ante ac fermevntum
                ornare, ipsum dui convallis ex.
              </Text>
            </View>
          </Carousel>
          <View style={{bottom: 70, paddingHorizontal: 20}}>
            <CustomButton
              variant={'filled'}
              title={'Login'}
              onPress={() =>
                navigation.navigate(CONSTANT.App.screenNames.login)
              }
              style={{width: '100%'}}
            />

            <CustomButton
              // variant={"filled"}
              title={'Register'}
              onPress={() =>
                navigation.navigate(CONSTANT.App.screenNames.signup)
              }
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: '#A7C829',
                top: 20,

                // bottom: '55%',
              }}
            />
          </View>
        </View>
      </View>
    </BgImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',

    paddingHorizontal: 24,
    paddingVertical: 80,
  },
  logo: {
    width: wp('45%'),
    height: hp('17%'),
  },
  main: {
    backgroundColor: 'rgba(1, 4, 23, 1)',
    // backgroundColor: 'rgba(1, 4, 23, .6)',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom: 100,
    height: hp('80%'),
    // height: 200,
  },
  card1: {
    backgroundColor: 'rgba(98, 98, 98, .8)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 44,
    // paddingHorizontal: 51,
    alignItems: 'center',
    justifyContent: 'center',
  },
  donation: {
    color: '#ffffff',
    fontSize: 23,
    textAlign: 'center',
    marginRight: 100,
    fontWeight: 'bold',
    bottom: 20,
  },
});

export default OnBoardingScreen;
