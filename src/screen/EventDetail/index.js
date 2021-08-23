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
import Share from 'react-native-share';
import files from './FileBase64';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
const EventDetailScreen = ({navigation}) => {
  const myCustomShare = async () => {
    const shareOption = {
      message:
        'Eid ul Adha 2021 | Group Qurbani Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      url: files.image1,
    };
    try {
      const shareResponse = await Share.open(shareOption);
    } catch (error) {
      console.log('Error', error);
    }
  };
  const ChoosePhoto = () => {
    bs.current.snapTo(1);

    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(images => {
      setImage(images.path);
      //   setModalVisible(false);
      console.log(images.path);
      bs.current.snapTo(1);
    });
    setModalVisible(false);
  };
  const TakePhoto = () => {
    bs.current.snapTo(1);

    ImagePicker.openCamera({
      width: 300,
      height: 400,
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(imagee => {
      setImage(imagee.path);
      console.log(imagee);
    });
  };
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Register Yourself</Text>
        {/* <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text> */}
      </View>
      {/* <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}> */}
      <CustomInput
        plcholder="Full Name"
        leftIcon="user"
        style={{paddingVertical: 10}}
      />
      <CustomInput
        plcholder="Email"
        leftIcon="mail"
        style={{paddingVertical: 10}}
      />
      <CustomInput
        plcholder="Phone Number"
        leftIcon="phone"
        style={{paddingVertical: 10}}
      />
      <CustomButton
        title={'Register'}
        variant={'filled'}
        style={{marginVertical: 10}}
      />
      {/* </View> */}
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);
  return (
    <>
      <BackgroundImage
        source={CONSTANT.App.screenImages.bg_Image}
        style={{flex: 1}}>
        <View>
          <Image
            source={CONSTANT.App.screenImages.masjid}
            style={styles.banner}
          />
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
            <TouchableOpacity style={styles.box1} onPress={myCustomShare}>
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
            }}></View>
        </View>
        <View style={{paddingBottom: 40}}>
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
            willingness to sacrifice his son Ismail in obedience to God. By
            making qurbani, Muslims demonstrate their obedience to Allah. At
            least one third of the meat from the animal should go to people who
            are poor or in vulnerable situations.
          </Text>
          <CustomButton
            // variant={"filled"}
            title={'Register'}
            onPress={() => bs.current.snapTo(0)}
            style={{
              width: '90%',
              marginLeft: 20,
              borderWidth: 1,
              backgroundColor: '#A7C829',
              marginTop: 20,
              marginBottom: 20,
              // bottom: '55%',
            }}
          />
        </View>
      </BackgroundImage>
      <BottomSheet
        ref={bs}
        snapPoints={[400, -200]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        initialPosition={'50%'} //200, 300
        // snapPoints={['-10%', '40%']}
        isBackDrop={true}
        isBackDropDismissByPress={true}
        isRoundBorderWithTipHeader={true}
        enabledGestureInteraction={true}
      />
    </>
  );
};
export default EventDetailScreen;

const styles = StyleSheet.create({
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    // padding: 20,
    backgroundColor: 'rgba(1, 4, 33, 1)',
    height: 355,
    paddingTop: 20,
    overflow: 'hidden',
    width: '100%',
    paddingHorizontal: 20,
    // position: 'absolute',
    // width: '100%',
    // flex: 1,
    // bottom: -10,

    // bottom: -60,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: 'rgba(1, 4, 33, 1)',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    overflow: 'hidden',
    top: 2,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  panelHandle: {
    width: 60,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#9D9D9D',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 23,
    height: 35,
    top: -25,
    color: '#fff',
  },
  panelSubtitle: {
    fontSize: 13,
    color: '#fff',
    top: -25,

    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
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
