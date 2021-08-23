import React, {useContext, useState, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
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

import {BackgroundImage} from 'react-native-elements/dist/config';
import Carousel from 'react-native-looped-carousel';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Share from 'react-native-share';
import Qibla from '../QiblaDirection/Qibla';

import Tts from 'react-native-tts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useIsFocused} from '@react-navigation/native';

// import {Button, Overlay} from 'react-native-elements';

const {width} = Dimensions.get('window');
// const height=width*100/100;  //60%
const height = 200;

const Data = [
  {
    id: 1,
    name: 'Prayer Timing',
    Icon_Name: 'clock',
    bgColor: '#A7C829',
    type: 'feather',
    screenNAme: CONSTANT.App.tabMenu.prayerTab,
  },
  {
    id: 2,
    name: 'Events',
    Icon_Name: 'calendar',
    bgColor: '#20BBD4',
    type: 'feather',
    screenNAme: CONSTANT.App.tabMenu.eventTab,
  },
  {
    id: 3,
    name: 'Donate',
    Icon_Name: 'dollar-sign',
    bgColor: '#DFBB2B',
    type: 'feather',
    screenNAme: CONSTANT.App.tabMenu.dashTab,
  },
  {
    id: 4,
    name: 'Ask Imam',
    Icon_Name: 'help-circle',
    bgColor: '#A758EB',
    type: 'feather',
    screenNAme: CONSTANT.App.screenNames.AskImamScreen,
  },
  {
    id: 5,
    name: 'Services',
    Icon_Name: 'server',
    bgColor: '#5E5E5E',
    type: 'font-awesome',
    screenNAme: CONSTANT.App.screenNames.services,
  },
];
const announceData = [
  {
    id: 1,
    desc: "  Hello folks! We are going to conduct a session on Scrum and it's process. Details will be posted soon.",
  },
  {
    id: 2,
    desc: "  Hello folks! We are going to conduct a session on Scrum and it's process. Details will be posted soon.",
  },
  {
    id: 3,
    desc: "  Hello folks! We are going to conduct a session on Scrum and it's process. Details will be posted soon.",
  },
];
const BannerImg = [
  CONSTANT.App.screenImages.banner,
  CONSTANT.App.screenImages.banner,
  CONSTANT.App.screenImages.banner,
  CONSTANT.App.screenImages.banner,
  CONSTANT.App.screenImages.banner,
];

const HomeScreen = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [layoutStyle1, setLayoutStyle1] = React.useState({
    width: '100%',
    height: 320,
  });
  const [visible, setVisible] = useState(false);
  const [play, setPlay] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      Tts.stop();
    }
  }, [isFocused]);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const [checked, setChecked] = useState(true);
  const [monthCheck, setMonthCheck] = useState(false);
  const [layoutStyle, setLayoutStyle] = React.useState({
    width: '100%',
    height: 190,
  });
  const myCustomShare = async () => {
    const shareOption = {
      message:
        '  indeed, I fear the successors after me, and my wife has been barren, so give me from Yourself an heir. Who will inherit me and inherit from the family of Jacob. And make him, my Lord, pleasing [to You]. Surah Maryam”',
    };
    try {
      const shareResponse = await Share.open(shareOption);
    } catch (error) {
      console.log('Error', error);
    }
  };
  const [active, setActive] = useState(0);
  const onPlay = () => {
    setPlay(true);
    Tts.speak(
      "wabialfiel , 'akhshaa alkhulafa' min baedi , waqad kanat zawjati kadhalik eaqir , 'aetini min nafsik waritha. min sirithni w min eashayrat yaequba. waijealh yurdi rabiy [lk].",
      {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.6,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      },
    );
  };
  const onStop = () => {
    setPlay(false);
    Tts.stop();
  };
  return (
    <BackgroundImage
      source={CONSTANT.App.screenImages.bg_Image}
      style={{flex: 1}}>
      <CustomHeader
        home
        image={CONSTANT.App.screenImages.logo}
        icon={CONSTANT.App.screenImages.bell}
        OnLongPress={() => navigation.navigate(CONSTANT.App.screenNames.login)}
      />

      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
        <View style={{padding: 10}}>
          <View style={styles.box}>
            <View style={styles.today}>
              <View
                style={{
                  width: 60,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={CONSTANT.App.screenImages.moon}
                  style={{width: 22, height: 22}}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    lineHeight: 19,
                    color: '#A7C829',
                    alignSelf: 'stretch',
                  }}>
                  Today
                </Text>
              </View>

              <Text style={{color: '#FFFFFF', fontSize: 18, marginTop: 4}}>
                29 Zul Qada,1442 Hijri
              </Text>
            </View>
            <View>
              <Image
                source={CONSTANT.App.screenImages.star}
                style={{
                  height: 60,
                  width: 39,
                  marginRight: 38,
                }}
              />
            </View>
          </View>
          <View style={[styles.showAll, {paddingHorizontal: 10}]}>
            <Text style={styles.text}>Verse of the day</Text>
          </View>
          <View style={styles.verseCard}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                // width: '100%',
                fontWeight: '300',
                lineHeight: 20,
                fontStyle: 'normal',
                top: 10,
              }}>
              {/* “And indeed, I fear the successors after me, and my wife has been
              barren, so give me from Yourself an heir. Who will inherit me and
              inherit from the family of Jacob. And make him, my Lord, pleasing
              [to You].” */}
              "wabialfiel , 'akhshaa alkhulafa' min baedi , waqad kanat zawjati
              kadhalik eaqir , 'aetini min nafsik waritha. min sirithni w min
              eashayrat yaequba. waijealh yurdi rabiy [lk]."
            </Text>
            <Text
              style={{
                color: '#9D9D9D',
                top: 20,
                fontSize: 17,
                fontWeight: '500',
                lineHeight: 17,
              }}>
              Surah Maryam
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: 30,
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity onPress={play ? onStop : onPlay}>
                  {/* <Image
                  source={CONSTANT.App.staticImages.listen}
                  style={{marginTop: 4, width: 22, height: 19}}
                /> */}
                  {play ? (
                    <Ionicons
                      name="volume-high-outline"
                      style={{fontSize: 25, color: '#a7c829'}}
                    />
                  ) : (
                    <Ionicons
                      name="volume-mute-outline"
                      style={{fontSize: 25, color: '#a7c829'}}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity onPress={play ? onStop : onPlay}>
                  <Text
                    style={{
                      color: '#a7c829',
                      left: 5,
                      width: 70,
                      fontSize: 17,
                    }}>
                    Listen
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.box1} onPress={myCustomShare}>
                  <AntDesign name="sharealt" size={22} color="#a7c829" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,

              marginRight: 3,
              overflow: 'hidden',
            }}>
            <Carousel
              //   delay={2000}
              style={layoutStyle}
              autoplay={false}
              //   pageInfo
              pagingEnabled
              bullets={true}
              chosenBulletStyle={{
                backgroundColor: '#fff',
                color: 'white',
                fontSize: 15,
                width: 12,
                height: 12,
              }}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              bulletStyle={{
                backgroundColor: '#b3afaf',
                borderWidth: 0,
                color: 'white',
                height: 12,

                width: 12,
              }}
              bulletsContainerStyle={{
                // marginRight: 70,
                left: '9%',
                // top: '0%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderWidth: 1,
                marginTop: '8%',
                marginBottom: 26,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'rgba(157, 157, 157, 0.4)',
                backgroundColor: 'rgba(157, 157, 157, 0.4)',
                width: '4%',
                height: '0%',
                marginLeft: '30%',
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
                <Image
                  source={CONSTANT.App.screenImages.banner}
                  style={{borderRadius: 20, width: '100%'}}
                />
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
                <Image
                  source={CONSTANT.App.screenImages.banner}
                  style={{borderRadius: 20, width: '100%'}}
                />
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
                <Image
                  source={CONSTANT.App.screenImages.banner}
                  style={{borderRadius: 20, width: '100%'}}
                />
              </View>
            </Carousel>
            <View style={{height: 110, marginTop: -11, marginLeft: -5}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {Data.map(item => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate(item.screenNAme)}
                        style={{
                          width: 55,
                          height: 55,
                          backgroundColor: item.bgColor,
                          borderRadius: 20,
                          alignItems: 'center',
                          justifyContent: 'center',
                          left: 10,
                          marginLeft: 3,
                          //   marginTop: '-10%',
                        }}
                        key={item.id}>
                        <Icon
                          name={item.Icon_Name}
                          type={item.type}
                          size={22}
                          color="#FFFFFF"
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          width: 70,
                          marginTop: 5,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginLeft: 3,
                        }}>
                        <Text style={{color: '#FFFFFF', fontWeight: '400'}}>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            {/* <ScrollView
    horizontal 
    showsHorizontalScrollIndicator={false}
    >
    {
        BannerImg.map((image,index)=>(
            <Image
            key={index}
            source={image}
            style={{marginRight:20}}
            />
        ))
    }


    </ScrollView> */}
          </View>
          <View
            style={{
              width: '100%',
              height: 140,
              borderRadius: 15,
              padding: 10,
              marginTop: 25,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginRight: 93,
                top: 8,
              }}>
              <Image
                source={CONSTANT.App.screenImages.speakar}
                style={{width: 22, height: 22, bottom: 5}}
              />

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  lineHeight: 19,
                  color: '#A7C829',
                  // bottom: 3,
                  left: 4,
                  width: '100%',
                }}>
                Announcement
              </Text>
            </View>
            <View style={{overflow: 'hidden'}}>
              <View>
                <Text
                  style={{
                    top: 75,
                    textAlign: 'right',
                    color: '#A8C829',
                    fontWeight: '700',
                    fontSize: 18,
                    height: 17,
                    right: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(CONSTANT.App.screenNames.Announce)
                    }>
                    <Text
                      style={{
                        color: '#A8C829',
                        fontWeight: '600',
                        fontSize: 16,
                        // bottom: 10,
                        height: 17,
                      }}>
                      See All
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
              <Carousel
                //   delay={2000}
                style={[layoutStyle, {overflow: 'hidden'}]}
                autoplay={false}
                //   pageInfo
                pagingEnabled
                bullets={true}
                chosenBulletStyle={{
                  backgroundColor: '#fff',
                  color: 'white',
                  fontSize: 40,
                  width: 14,
                  height: 14,
                }}
                contentContainerStyle={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                bulletStyle={{
                  backgroundColor: '#b3afaf',
                  borderWidth: 0,
                  color: 'white',
                  height: 12,

                  width: 12,
                }}
                bulletsContainerStyle={{
                  marginRight: 160,
                  marginBottom: 95,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: 'rgba(157, 157, 157, 0.2)',
                  backgroundColor: 'rgba(157, 157, 157, 0.2)',
                  width: '20%',
                  height: '10%',
                  marginLeft: '4%',
                  borderRadius: 20,
                }}>
                {announceData.map(item => (
                  <View
                    style={[
                      layoutStyle,
                      {
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        overflow: 'hidden',
                      },
                    ]}>
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(
                            CONSTANT.App.screenNames.AnnounceDetail,
                          )
                        }>
                        <View>
                          <Text
                            style={{
                              fontSize: 16,
                              lineHeight: 17,
                              color: '#fff',
                              fontWeight: 'normal',
                              fontStyle: 'normal',
                              bottom: 1,
                              // width: '100%',
                              // flexWrap: 'wrap',
                              // height: 51,
                              display: 'flex',
                              textAlign: 'left',
                              alignItems: 'center',

                              // right: 5,
                              // right: %',
                              // zIndex: -1,
                            }}>
                            {item.desc}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </Carousel>
            </View>
          </View>

          <View style={[styles.showAll, {paddingHorizontal: 10}]}>
            <Text style={styles.text}>Today's - Salah Time</Text>

            <Text style={{color: '#A7C829', fontSize: 18}}>See all</Text>
          </View>
          <View style={{marginTop: 10}}>
            {/* <Text
              style={{
                color: '#9D9D9D',
                alignItems: 'stretch',
                // letterSpacing: 1,
                fontSize: 14,
                paddingLeft: 10,
                lineHeight: 17,
                fontWeight: '500',
              }}>
              India Standard Time (IST) is 5:30 hours
            </Text> */}
          </View>
          <View style={styles.calender}>
            <View style={styles.rowData}>
              <Text style={{fontSize: 15, color: '#9D9D9D'}}>Namaz</Text>
              <Text style={{fontSize: 15, color: '#9D9D9D'}}>Athaan Time</Text>
              <Text style={{fontSize: 15, color: '#9D9D9D'}}>Iqamah Time</Text>
            </View>
            <View style={styles.horizoLine}></View>

            <View style={styles.rowData}>
              <Text style={styles.calanderText}>Fajr</Text>

              <Text style={styles.calanderText}>06:00 AM</Text>
              <Text style={styles.calanderText}>06:00 AM</Text>
            </View>
            <View style={styles.rowData}>
              <Text style={{color: 'white', fontSize: 15, marginRight: 20}}>
                Sunrise
                <Feather
                  name="sun"
                  style={{
                    position: 'absolute',
                    color: '#9D9D9D',
                    width: 15.58,
                    height: 15.58,
                    left: 23,
                  }}
                />
              </Text>
              <Text style={styles.calanderText}></Text>
              <Text style={styles.calanderText}>06:10 AM</Text>
            </View>
            <View style={styles.rowData}>
              <Text style={{fontSize: 16, color: '#A7C829'}}>Dhuhr</Text>
              <Text style={{fontSize: 16, color: '#A7C829', paddingRight: 11}}>
                12:45 AM
              </Text>
              <Text style={{fontSize: 17, color: '#A7C829', paddingLeft: 8}}>
                06:00 AM
              </Text>
            </View>
            <View style={styles.rowData}>
              <Text style={styles.calanderText}>Asr</Text>
              <Text style={styles.calanderText}>04:04 AM</Text>
              <Text style={styles.calanderText}>06:00 AM</Text>
            </View>
            <View style={styles.rowData}>
              <Text style={styles.calanderText}>Maghrib</Text>
              <Text style={{color: 'white', paddingRight: 38, fontSize: 16}}>
                07:29 AM
              </Text>
              <Text style={styles.calanderText}>06:00 AM</Text>
            </View>
            <View style={styles.rowData}>
              <Text style={styles.calanderText}>Isha</Text>
              <Text style={{color: 'white', fontSize: 16, paddingRight: 10}}>
                08:55 PM
              </Text>
              <Text style={styles.calanderText}>06:00 AM</Text>
            </View>
            <View style={styles.horizoLine}></View>
            <View style={[styles.rowData, {marginBottom: 15}]}>
              <Text style={styles.calanderText}>Qiyam</Text>
              <Text style={styles.calanderText}></Text>
              <Text style={styles.calanderText}>01:32 AM</Text>
            </View>
            <View style={[styles.rowData, {marginBottom: 15}]}>
              <Text style={styles.calanderText}>Tahajjud</Text>
              <Text style={{color: 'white', fontSize: 16, paddingRight: 34}}>
                04:32 AM
              </Text>
              <Text style={styles.calanderText}>04:32 AM</Text>
            </View>
          </View>
          <View style={{marginTop: 10, marginLeft: 10}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '800',
                lineHeight: 24,
                color: '#ffff',
                paddingTop: 20,
                // top: '4%',
              }}>
              Donate Us
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                color: '#9D9D9D',
                alignItems: 'stretch',
                fontSize: 14,
                lineHeight: 17,
                marginLeft: 10,
              }}>
              Lorem Ipsum is simply dummy text of the printing
            </Text>
          </View>

          {/* <View style={styles.ribbon}> */}
          {/* <CustomInput plcholder={'Enter Amount'} leftIcon={'dollar-sign'} /> */}
          {/* <View>
              <View
                style={{
                  width: '100%',
                  height: 55,
                  backgroundColor: 'rgba(98, 98, 98, 0.5)',
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: 10,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#9D9D9D',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 19,
                    top: 20,
                    left: 20,
                  }}>
                  Select compaign
                </Text>
                <AntDesign
                  name="down"
                  onPress={toggleOverlay}
                  style={{
                    color: '#9D9D9D',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 19,
                    top: 20,
                    right: 20,
                  }}
                />
              </View>

              <Overlay
                isVisible={visible}
                overlayStyle={{width: '70%', height: '20%'}}
                onBackdropPress={toggleOverlay}>
                <View style={{width: '100%', height: '100%'}}>
                  <FlatList
                    data={[
                      {key: 'option1'},
                      {key: 'option2'},
                      {key: 'option3'},
                    ]}
                    renderItem={({item}) => (
                      <Text style={{width: '100%'}}>{item.key}</Text>
                    )}
                    style={{width: '90%', height: '10%'}}
                  />
                </View>
              </Overlay>
            </View> */}

          {/* <View style={styles.rowData}>
              <CheckBox
                title="One time"
                textStyle={{color: '#FFFFFF', fontWeight: '300', fontSize: 15}}
                checked={checked}
                checkedColor={CONSTANT.App.colors.Icon_Color}
                uncheckedColor={CONSTANT.App.colors.Icon_Color}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={e => setChecked(!checked)}
                containerStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  borderWidth: 0,
                }}
              />
              <CheckBox
                title="Monthly"
                textStyle={{color: '#FFFFFF', fontWeight: '300', fontSize: 15}}
                checked={monthCheck}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={e => setMonthCheck(!monthCheck)}
                containerStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0)',
                  borderWidth: 0,
                }}
              />
            </View> */}
          <CustomButton
            variant={'filled'}
            title={'Donate now'}
            style={{marginTop: 20}}
          />

          {/* <View>
              <Text
                style={{
                  color: '#9D9D9D',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Accepted payment method
              </Text>
            </View>

            <View style={styles.paypal}>
              <Image
                source={CONSTANT.App.screenImages.paypal}
                style={{width: '100%', height: '100%'}}
              />
            </View> */}
          {/* </View> */}

          <View
            style={[
              styles.showAll,
              {paddingBottom: -5, marginTop: 35, paddingHorizontal: 10},
            ]}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '800',
                lineHeight: 24,
                color: '#ffff',
                // top: '4%',
              }}>
              Upcoming Programs
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(CONSTANT.App.tabMenu.eventTab)
              }>
              <Text style={{color: '#A7C829', fontSize: 18}}>See all</Text>
            </TouchableOpacity>
          </View>
          <ListComp navigation={navigation} />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              top: 35,
              paddingBottom: 18,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '800',
                lineHeight: 24,
                color: '#ffff',
                // top: '4%',
              }}>
              Live Stream
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(CONSTANT.App.screenNames.liveStream)
            }
            style={{
              width: '100%',
              height: 250,
              backgroundColor: '#1a1d2e',
              marginTop: 20,
              borderRadius: 15,
              marginTop: 30,
            }}>
            <View style={{width: '100%', height: 190}}>
              <Image
                source={require('../../assets/images/video.png')}
                style={{width: '100%'}}
                resizeMode="stretch"
              />

              <View style={{position: 'absolute', top: '40%', left: '41%'}}>
                <Image source={require('../../assets/images/playBtn.png')} />
              </View>
            </View>

            <View style={{marginLeft: 10}}>
              <Text style={{marginLeft: 5, color: '#FFFFFF', fontSize: 17}}>
                Speech | Ikhlaak E Hasna
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    marginTop: 10,
                  }}>
                  <Icon name="clock" type="evilicon" color="#9D9D9D" />
                  <Text style={{marginLeft: 5, color: '#9D9D9D'}}>
                    standard 10 min ago
                  </Text>
                  <Text style={{color: '#9D9D9D', marginLeft: 5}}>|</Text>
                  <Text
                    style={{
                      color: '#9D9D9D',
                      marginLeft: 5,
                      color: 'rgba(221, 75, 57, 1)',
                    }}>
                    Live
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(CONSTANT.App.screenNames.liveStream)
                  }>
                  <Text
                    style={{
                      color: '#A8C829',
                      fontWeight: '600',
                      fontSize: 16,
                      // bottom: 10,
                      height: 17,
                      marginRight: 10,
                    }}>
                    Watch Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          {/* <View style={[styles.showAll, {paddingHorizontal: 10}]}>
            <Text style={styles.text}>Qibla direction</Text>
          </View>
          <View style={styles.qibla}>
            <Qibla />
          </View> */}
        </View>
      </ScrollView>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  today: {
    padding: 13,
  },
  horizoLine: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#9D9D9D',
    marginTop: 10,
  },
  styleIcon: {
    width: 80,
    height: 80,
  },
  showAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  paginText: {
    color: '#888',
  },
  textActive: {
    color: '#FFFFFF',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 24,
    fontStyle: 'normal',
  },
  calender: {
    width: '100%',
    height: 400,
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,

    borderRadius: 10,
  },
  verseCard: {
    width: '100%',
    height: 220,
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 10,
  },
  qibla: {
    width: '100%',
    height: 360,
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    // paddingTop: 20,
    borderRadius: 10,
  },
  calanderText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  rowData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  ribbon: {
    width: '100%',
    marginTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 10,
    borderRadius: 10,
  },
  paypal: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
  },
});
export default HomeScreen;
