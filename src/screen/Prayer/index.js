import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {BgImage} from '../../component/ImageContainer';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Feather from 'react-native-vector-icons/dist/Feather';
import HijriDatePickerAndroid from 'react-native-hijri-date-picker-android';

const PrayerScreen = () => {
  const calendar = () => {
    let options = {
      date: new Date(),
      minDate: new Date(new Date().getTime() - 1 * 30 * 24 * 60 * 60 * 1000),
      maxDate: new Date(new Date().getTime() + 1 * 30 * 24 * 60 * 60 * 1000),
    };
    let stringOptions = {
      date: '27-7-1438',
      minDate: '25-6-1438',
      maxDate: '29-8-1438',
    };
    //mode:"no_arrows" hide the arrows at the bar of the calendar
    //weekDayLabels, override the default day labels at the calendar
    let moreOptions = {
      date: '27-7-1438',
      minDate: '25-6-1438',
      maxDate: '29-8-1438',
      mode: 'no_arrows',
      weekDayLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    };
    //accepts option  dates with date objects or strings in the following format ['dd-MM-yyyy']
    HijriDatePickerAndroid.open(stringOptions).then(function (result) {
      if (result.action == HijriDatePickerAndroid.dismissedAction) {
        console.warn('Dismissed');
      } else {
        let {year, day, month} = result;
        console.warn(
          'Hijri Date: ' + day + '/' + (month + 1) + '/' + year + '/',
        );
      }
    });

    //convert string Hijri date ['dd-MM-yyyy'] to a gregorian timestamp
    HijriDatePickerAndroid.convertHijriDateToGregorianDate('12-7-1438').then(
      function (result) {
        console.warn('Gregorian Timestamp' + JSON.stringify(result));
      },
    );

    //convert gregorian date object to hijri {year,month,day}
    HijriDatePickerAndroid.convertGregorianDateToHijriDate(new Date()).then(
      function ({year, day, month}) {
        console.warn('Hijri Date: ' + day + '/' + month + 1 + '/' + year + '/');
      },
    );
  };
  return (
    <BgImage>
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              height: 27,
              fontWeight: '500',
              lineHeight: 26,
            }}>
            Salah Time
          </Text>
          <TouchableOpacity onPress={calendar}>
            <AntDesign
              name="calendar"
              style={{color: '#a7c829', fontSize: 22}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 60,
          }}>
          <TouchableOpacity
            style={styles.box}
            // onPress={}
          >
            <Entypo name="chevron-left" size={25} color="#ffffff" />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '400',
                left: 20,
                lineHeight: 20,
              }}>
              16 July 21
            </Text>
            <Text
              style={{
                color: '#9d9d9d',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 20,
                textAlign: 'center',
                top: 2,
              }}>
              29 Zul Qada 1442
            </Text>
          </View>
          <TouchableOpacity style={styles.box1}>
            <Entypo name="chevron-right" size={22} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <View style={styles.calender}>
          <View style={styles.rowData}>
            <Text style={{fontSize: 15, color: '#fff'}}>Namaz</Text>
            <Text style={{fontSize: 15, color: '#fff'}}>Athaan Time</Text>
            <Text style={{fontSize: 15, color: '#fff'}}>Iqamah Time</Text>
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
      </View>
    </BgImage>
  );
};

export default PrayerScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  showAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    // left: 20,
  },
  box1: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    // right: 20,
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
    marginTop: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,

    borderRadius: 10,
  },
  verseCard: {
    width: '100%',
    height: 220,
    marginTop: 20,
    backgroundColor: '#515151',
    padding: 20,
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
    backgroundColor: '#515151',
    padding: 10,
    borderRadius: 10,
  },
});
