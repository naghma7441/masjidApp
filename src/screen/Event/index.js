import React, {useState, useEffect, useRef} from 'react';
import {
  ImageBackground,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import CONSTANT from '../../constants';

import {BgImage} from '../../component/ImageContainer';
import {BackgroundImage} from 'react-native-elements/dist/config';
import Carousel from 'react-native-looped-carousel';
import {useIsFocused} from '@react-navigation/native';

import {Tab} from 'react-native-elements';
import {
  UpEventListComp,
  FeaturedEventListComp,
} from '../../component/List/EventList';

const EventScreen = ({navigation}) => {
  const [upEvent, setupEvent] = useState(true);
  const [featureEvent, setfeatureEvent] = useState(true);
  const [disableScroll, setDisableScroll] = useState(false);
  const [marginleft, setMarginLeft] = useState(20);
  const [CustomView, setCustomView] = useState(ScrollView);
  const [touch, setTouch] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [layoutStyle, setLayoutStyle] = React.useState({
    width: '100%',
    height: 190,
  });
  const scroll = () => {
    setDisableScroll(true);
    setCustomView(View);
    setTouch(false);
    // alert('hi');
  };
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setDisableScroll(false);
    }
  }, [isFocused]);
  // console.log({ disableScroll, touch });
  const onRefreshHandler = () => {
    console.log({touch, disableScroll});
    if (touch == true) {
      if (disableScroll === true) {
      }
    }
  };
  const handleScroll = event => {
    let y = event.nativeEvent.contentOffset.y;
    let x = event.nativeEvent.contentOffset.x;
    let rounded = Math.floor(y);
    if (rounded >= 180) {
      if (disableScroll === false) {
        setDisableScroll(true);
        setCustomView(View);
        setTouch(true);
      }
    }
    console.log('ffffffff', {x, y, rounded});
  };
  // onclick

  const onchangeTab = item => {
    setSelectedIndex(item.id);
    if (item.id === 1) {
      setupEvent(true);
      setfeatureEvent(true);
    }
    if (item.id === 2) {
      setupEvent(false);
      setfeatureEvent(true);
    }
  };
  const data = [
    {
      id: 1,
      title: 'Upcoming events',
    },
    {
      id: 2,
      title: 'Featured events ',
    },
    {
      id: 3,
      title: 'Past events',
    },
  ];
  console.log('index value', selectedIndex);
  return (
    <View
      onTouchMove={onRefreshHandler}
      style={{width: '100%', height: '100%'}}>
      <BackgroundImage
        source={CONSTANT.App.screenImages.bg_Image}
        style={{flex: 1}}>
        <View onTouchMove={() => setDisableScroll(false)}>
          <Text style={styles.title}>Events</Text>
        </View>
        {!disableScroll && (
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
          </View>
        )}

        <CustomView
          scrollEnabled={true}
          setDisableScroll={false}
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}>
          <View style={styles.banner}>
            {!disableScroll && (
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
                  left: '7%',
                  // top: '0%',
                  marginTop: '12%',
                  marginBottom: 15,
                  // borderWidth: 1,
                  // borderStyle: 'solid',
                  // borderColor: 'rgba(157, 157, 157, 0.6)',
                  // backgroundColor: 'rgba(157, 157, 157, 0.6)',
                  width: '5%',
                  height: '3%',
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
            )}
            <View style={{marginTop: -25}}>
              <ScrollView
                horizontal={true}
                // contentContainerStyle={{height: 120}}
                showsHorizontalScrollIndicator={false}>
                {data.map(item => {
                  console.log('hhhu', item.title);
                  return (
                    <>
                      <View key={item.id} style={{height: 120}}>
                        <Tab
                          value={true}
                          onChange={() => onchangeTab(item)}
                          key={item.id}
                          indicatorStyle={[
                            selectedIndex === 0 && styles.borderTab,
                            {
                              width: item.id === selectedIndex ? 40 : 0,
                              borderBottomWidth:
                                item.id === selectedIndex ? 3 : 0,
                              borderBottomColor:
                                item.id === selectedIndex ? '#A7C829' : 'none',
                              marginLeft: 10,
                            },
                          ]}>
                          <Tab.Item
                            title={item.title}
                            titleStyle={{
                              color: '#A7C829',
                              fontSize: 22,
                              textTransform: 'none',
                              marginLeft: -15,
                            }}
                          />
                        </Tab>
                      </View>
                    </>
                  );
                })}
              </ScrollView>
            </View>
            <ScrollView
              verticle={true}
              style={{marginTop: -60, marginleft: 10}}
              onTouchMove={scroll}
              showsVerticalScrollIndicator={false}>
              {selectedIndex === 1 && (
                <UpEventListComp
                  navigation={navigation}
                  handleRefresh={onRefreshHandler}
                />
              )}
              {(selectedIndex === 2 || selectedIndex === 1) && (
                <FeaturedEventListComp
                  navigation={navigation}
                  handleRefresh={onRefreshHandler}
                />
              )}
            </ScrollView>
          </View>
        </CustomView>
      </BackgroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 72,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    top: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  today: {
    padding: 13,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    top: 57,
    left: 24,
    right: 279,
    bottom: 728,
  },
  banner: {
    top: 80,
    paddingHorizontal: 10,
  },
  borderTab: {
    width: 40,
    borderBottomWidth: 3,
    borderBottomColor: '#A7C829',
    marginLeft: 10,
  },
});
export default EventScreen;
