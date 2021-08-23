import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
// import {Image} from 'react-native-elements/dist/image/Image';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CheckBox} from 'react-native-elements';

import {BgImage} from '../../component/ImageContainer';
import CONSTANT from '../../constants';
import CustomInput from '../../component/InputFileds';
import Textarea from '../../component/Textarea';
import ImagePicker from 'react-native-image-crop-picker';
import CustomButton from '../../component/CustomButton';
import Feather from 'react-native-vector-icons/Feather';
import ReadMore from 'react-native-read-more-text';
import ReadMoreComp from './ReadMore';

const AskImamScreen = () => {
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState();
  const ChoosePhoto = () => {
    // bs.current.snapTo(1);

    ImagePicker.openPicker({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(images => {
      setImage(images.path);
      //   setModalVisible(false);
      console.log(images.path);
      //   bs.current.snapTo(1);
    });
    setModalVisible(false);
  };

  const bs = React.createRef();
  const fall = new Animated.Value(1);
  return (
    <BgImage>
      <View style={styles.container}>
        <View style={styles.topContain}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={22} color="#ffffff" />
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 25,
              fontWeight: '550',
              left: 80,
              lineHeight: 30,
            }}>
            Ask Imam
          </Text>
        </View>

        <ScrollView
          vertical={true}
          contentContainerStyle={{paddingBottom: 100}}
          showsVerticalScrollIndicator={false}
          style={{top: -16}}>
          <Image
            source={CONSTANT.App.screenImages.askImam}
            style={{width: '100%'}}
          />
          <View style={{width: '100%', paddingHorizontal: 20}}>
            <Text style={styles.heading}>What is Ask imam</Text>

            {/* <Text style={styles.title}> */}
            <ReadMoreComp />
            {/* </Text> */}
          </View>
          <View style={{width: '100%', paddingHorizontal: 20}}>
            <Text style={styles.heading1}> Ask imam now</Text>
            <Text style={styles.title1}>
              Submit the form below to send your Question to Imam
            </Text>
          </View>

          {/* <View style={styles.inContainer}>
            <Text
              style={{
                color: '#a7c829',
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 20,
                marginTop: 20,
                marginLeft: 20,
              }}>
              Personal Information
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 18,
                marginTop: 15,
              }}>
              <AntDesign name="mail" style={{color: '#a7c829', fontSize: 20}} />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  fontWeight: '400',
                  lineHeight: 20,
                  marginLeft: 10,
                }}>
                contact@aticjc.com
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 18,
                marginTop: 15,
              }}>
              <Ionicons
                name="md-location-outline"
                style={{color: '#a7c829', fontSize: 20}}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  fontWeight: '400',
                  lineHeight: 20,
                  marginLeft: 5,
                  paddingRight: 10,
                  width: 265,
                }}>
                Al Tawheed Center, 984 Westside Ave, Jersey City, NJ 07306,
                United States
              </Text>
            </View>
            <View
              style={{
                width: '70%',
                borderBottomWidth: 1,
                borderColor: '#fff',
                paddingTop: 20,
                left: 20,
                opacity: 20,
                marginHorizontal: 20,
              }}></View>
            <Text
              style={{
                color: '#a7c829',
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 20,
                marginTop: 20,
                marginLeft: 20,
              }}>
              Masjid Office
            </Text>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 18,
                marginTop: 15,
              }}>
              <Ionicons
                name="md-location-outline"
                style={{color: '#a7c829', fontSize: 20}}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  fontWeight: '400',
                  lineHeight: 20,
                  marginLeft: 5,
                  paddingRight: 10,
                  width: 265,
                  paddingBottom: 30,
                }}>
                Al Tawheed Center, 984 Westside Ave, Jersey City, NJ 07306,
                United States
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 21,
              lineHeight: 24,
              fontWeight: '600',
              top: 60,
              left: 4,
            }}>
            Get in touch
          </Text>
          <Text
            style={{
              color: '#9D9D9D',
              fontSize: 17,
              fontWeight: '500',
              lineHeight: 20,
              marginLeft: 4,
              top: 70,
              paddingRight: 10,
              width: 315,
            }}>
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us
          </Text> */}
          <View style={styles.inContainer1}>
            <Text
              style={{
                color: '#a7c829',
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 20,
                marginTop: 20,
                marginLeft: 10,
              }}>
              Personal Information
            </Text>
            <CustomInput
              plcholder="First Name"
              leftIcon="user"
              style={{paddingVertical: 10}}
            />
            <CustomInput
              plcholder="Last Name"
              leftIcon="user"
              style={{paddingVertical: 10}}
            />
            <Text
              style={{
                color: 'rgba(157, 157, 157, 1)',
                fontSize: 16,
                fontWeight: '600',
                lineHeight: 20,
                marginTop: 20,
                marginLeft: 10,
              }}>
              Gender*
            </Text>
            <View style={styles.rowData}>
              <CheckBox
                title="Male"
                textStyle={{color: '#FFFFFF', fontWeight: '300', fontSize: 15}}
                checked={maleChecked}
                checkedColor={CONSTANT.App.colors.Icon_Color}
                uncheckedColor={CONSTANT.App.colors.Icon_Color}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={e => {
                  setMaleChecked(!maleChecked);
                  // setFemaleChecked(!femaleChecked);
                }}
                containerStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  borderWidth: 0,
                }}
              />
              <CheckBox
                title="Female"
                textStyle={{color: '#FFFFFF', fontWeight: '300', fontSize: 15}}
                checked={femaleChecked}
                checkedColor={CONSTANT.App.colors.Icon_Color}
                uncheckedColor={CONSTANT.App.colors.Icon_Color}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={e => {
                  setFemaleChecked(!femaleChecked);
                  // setMaleChecked(!maleChecked);
                }}
                containerStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  borderWidth: 0,
                }}
              />
            </View>
            <CustomInput
              plcholder="DD/MM/YYYY"
              leftIcon="calendar"
              style={{paddingVertical: 10}}
            />
            <Text
              style={{
                color: '#a7c829',
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 20,
                marginTop: 20,
                marginLeft: 10,
              }}>
              Contact Information
            </Text>
            <CustomInput
              plcholder="Email*"
              leftIcon="mail"
              style={{paddingVertical: 10}}
            />
            <CustomInput
              plcholder="Mobile*"
              leftIcon="phone"
              style={{paddingVertical: 10}}
            />
            <Text
              style={{
                color: '#a7c829',
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 20,
                marginTop: 20,
                marginLeft: 10,
              }}>
              Additional Information
            </Text>
            <CustomInput
              plcholder="Education"
              // leftIcon="user"
              style={{paddingVertical: 10}}
            />
            <CustomInput
              plcholder="Profession"
              // leftIcon="user"
              style={{paddingVertical: 10}}
            />
            <CustomInput
              plcholder="Subject"
              // leftIcon="user"
              style={{paddingVertical: 10}}
            />
            <Text
              style={{
                color: 'rgba(157, 157, 157, 1)',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 20,
                marginTop: 20,
                marginLeft: 10,
              }}>
              Reason for Contact*
            </Text>

            {/* <CustomInput plcholder="Comments" /> */}
            <Textarea plcholder="write here" />

            <View style={styles.boxC}>
              <View style={styles.boxwrap}>
                <TouchableOpacity onPress={ChoosePhoto}>
                  <View style={styles.box1}>
                    <Feather name="image" style={styles.img} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.boxwrap}>
                <TouchableOpacity onPress={ChoosePhoto}>
                  <View style={styles.box1}>
                    <Feather name="image" style={styles.img} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.boxwrap}>
                <TouchableOpacity onPress={ChoosePhoto}>
                  <View style={styles.box1}>
                    <Feather name="image" style={styles.img} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.boxwrap}>
                <TouchableOpacity onPress={ChoosePhoto}>
                  <View style={styles.box1}>
                    <Feather name="image" style={styles.img} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                color: '#9D9D9D',
                fontSize: 13,
                fontWeight: '400',
                paddingVertical: 10,
              }}>
              PNG,JPG & DOC file only
            </Text>
            <CheckBox
              title="Signup for Newsletter"
              textStyle={{
                color: 'rgba(157, 157, 157, 1)',
                fontWeight: '300',
                fontSize: 15,
                left: -10,
                top: -2,
              }}
              checked={checked}
              checkedColor={{backgroundColor: 'rgba(157, 157, 157, 1)'}}
              uncheckedColor={{backgroundColor: 'rgba(157, 157, 157, 1)'}}
              // uncheckedColor={CONSTANT.App.colors.Icon_Color}
              onPress={e => setChecked(!checked)}
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                left: -13,
              }}
            />
            <CustomButton
              title={'Submit'}
              variant={'filled'}
              //   style={{marginTop: 80}}
            />
            <Text
              style={{
                color: '#9D9D9D',
                fontSize: 15,
                fontWeight: '500',
                paddingVertical: 20,
              }}>
              By clicking submit you are agreeing to the Terms and Conditions.
            </Text>
          </View>
        </ScrollView>
      </View>
    </BgImage>
  );
};

export default AskImamScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 5,

    overflow: 'hidden',
  },
  inContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    top: 35,
    overflow: 'hidden',
    borderRadius: 10,
  },
  inContainer1: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    top: 40,
    overflow: 'hidden',
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingTop: 20,
  },
  topContain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // top: 10,
    height: 120,
    overflow: 'hidden',
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  boxwrap: {
    height: 82,
    width: 68,
    backgroundColor: '#1a1d2e',
    borderRadius: 10,

    padding: 1,
  },
  box1: {
    borderRadius: 10,
    height: 80,
    width: 66,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  rowData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  img: {
    fontSize: 20,
    color: '#9D9D9D',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    // width: '100%',
    left: -18,
    top: 10,
    // height: 67,
  },
  title1: {
    color: 'rgba(157, 157, 157, 1)',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    width: '100%',
    left: -15,
    top: 10,
    // height: 67,
  },
  heading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20,
    width: '100%',
    left: -15,
    top: 10,
    paddingVertical: 20,
    // height: 67,
  },
  heading1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
    width: '100%',
    left: -15,
    top: 10,
    paddingVertical: 20,
    // height: 67,
  },
});
