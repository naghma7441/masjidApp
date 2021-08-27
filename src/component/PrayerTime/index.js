import React, { useEffect ,useState} from 'react'
import Geolocation from '@react-native-community/geolocation';
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/dist/Feather';

const PrayerTimeComp=({currentLongitude,currentLatitude,currentMonth,textDesign})=>{
    const [prayerTime,setPrayerTime]=useState([])

    useEffect(()=>{
        getPraytime()

    },[getPraytime,currentLongitude,currentLatitude,currentMonth])

    const getPraytime=async()=>{
        try{
    const result =await fetch (`http://api.aladhan.com/v1/calendar?latitude=${currentLongitude}&longitude=${currentLatitude}&method=2&month=${currentMonth}&year=2021`,{
      method:'get'
    } )
    const response=await result.json()
    // console.log("sss",response.data)
    response.data.map(item=>{
    //   console.log("item",item.timings)
      setPrayerTime(item.timings)
    
    })
        }
        catch(err){
          console.log(err)
        }
    
    
      }
    
    return(
        <>
          <View style={[styles.calender,textDesign]}>
            <View style={styles.rowData}>
              <Text style={{fontSize: 15, color: '#9D9D9D'}}>Namaz</Text>
              <Text style={{fontSize: 15, color: '#9D9D9D'}}>Athaan Time</Text>
            </View>
            <View style={styles.horizoLine}></View>

            <View style={styles.rowData}>
              <Text style={styles.calanderText}>Fajr</Text>
              <Text style={styles.calanderText}>{prayerTime.Fajr}</Text>
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
              <Text style={styles.calanderText}>{prayerTime.Sunrise}</Text>
            </View>
            <View style={styles.rowData}>
              <Text style={{fontSize: 16, color: '#A7C829'}}>Dhuhr</Text>
              <Text style={{fontSize: 16, color: '#A7C829'}}>
                {prayerTime.Dhuhr}
              </Text>
            </View>
            <View style={styles.rowData}>
              <Text style={styles.calanderText}>Asr</Text>
              <Text style={styles.calanderText}>{prayerTime.Asr}</Text>
            </View>
            <View style={styles.rowData}>
              <Text style={styles.calanderText}>Maghrib</Text>
              <Text style={{color: 'white', fontSize: 16}}>
                {prayerTime.Maghrib}
              </Text>
            </View>
            <View style={styles.rowData}>
              <Text style={styles.calanderText}>Isha</Text>
              <Text style={{color: 'white', fontSize: 16}}>
                {prayerTime.Isha}
              </Text>
            </View>
            <View style={styles.horizoLine}></View>
            <View style={[styles.rowData, {marginBottom: 15}]}>
              <Text style={styles.calanderText}>Sunset</Text>
              <Text style={styles.calanderText}>{prayerTime.Sunset}</Text>

            </View>
          </View>
        </>

    )
}


export {PrayerTimeComp}

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