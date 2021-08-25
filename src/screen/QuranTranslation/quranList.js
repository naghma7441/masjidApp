import React, { useEffect, useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Sound Component
import Sound from 'react-native-sound';

const ListQuranComp=({item})=>{
    const [toggleBtn, setToggleBtn] = useState(true)
    useEffect(() => {

        getByChapter()
        Sound.setCategory('Playback', true); // true = mixWithOthers
        return () => {
          if (sound1) sound1.release();
          if (sound2) sound2.release();
          if (sound3) sound3.release();
          if (sound4) sound4.release();
          if (sound5) sound5.release();
          if (sound6) sound6.release();
        };
      }, []);
    
  
    const playSound = (item, index) => {
      console.log(item)
  
      sound1 = new Sound(`https://audio.qurancdn.com/${item}`, '', (error, _sound) => {
        
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
          alert('succes')
        });
        setToggleBtn(false)
  
      });
      const stopSound = (_item, index) => {
        console.log("toggle")
        if (sound1) {
          sound1.stop(() => {
            console.log('Stop');
          });
        }
        setToggleBtn(false)
      };
    
  
    return(
      <View key={item.id} style={{
        paddingVertical: 10, backgroundColor: 'rgba(98,98,98,0.3)', marginVertical: 10
      }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
          paddingVertical: 10, marginVertical: 10
        }}>
          <TouchableOpacity onPress={() => toggleBtn === true ? playSound(item.audio.url) : stopSound(item.id)}
            style={{
              width: 30, height: 30, borderRadius: 150, backgroundColor: '#00acc2',
              alignItems: 'center', justifyContent: 'center'
            }}>
            {
              toggleBtn === true && item.id ?
                <AntDesign name="caretright" color={'#FFFFFF'} /> :
                <AntDesign name="pausecircle" color={'#FFFFFF'} />
  
            }
            {/* nme="pausecircle" */}
          </TouchableOpacity>
  
          <Text style={{ fontSize: 17, color: '#FFFFFF' }}>{item.text_indopak}</Text>
        </View>
        {
          item.words.map(word => {
            console.log(word.verse_key)
            return (
              <View key={word.id} style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Text style={{ color: '#FFFFFF' }}>{word.translation.text}</Text>
  
  
              </View>
            )
          })
        }
      </View>
    
      //
    )
  
    }
    
  
    }
  
    export {ListQuranComp}