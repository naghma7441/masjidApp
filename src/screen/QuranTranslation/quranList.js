// Play Music / Sound in React Native App for Android and iOS
// https://aboutreact.com/react-native-play-music-sound/

// import React in our code
import React, { useEffect, useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  ActivityIndicatorBase,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Sound Component
import Sound from 'react-native-sound';
import { BgImage } from '../../component/ImageContainer';

const QuranTransScreen = ({ route, navigation }) => {
  let sound1, sound2, sound3, sound4, sound5, sound6;
  const { item } = route.params
  // console.log('chapterItem', item)

  const [Item, setItem] = useState(item)
  const [data, setData] = useState([])
  const [toggleBtn, setToggleBtn] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(false)
const [isLoading,setIsLoading]=useState(false)
const [pageCurrent,setPageCurrent]=useState(1)

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
  }, [pageCurrent]);


  const getByChapter = async () => {
    try {
      const result = await fetch(`http://api.quran.com/api/v3/chapters/${Item.id}/verses?recitation=1&translations=21&language=en&page=${pageCurrent}&text_type=words`)
      const resJson = await result.json()
      // console.log("result", resJson)
      setData(data.concat(resJson.verses))

setIsLoading(false)

    } catch (err) {
      console.log(err)

    }

  }



  const playSound = (item, index) => {
    // console.log(item)

    sound1 = new Sound(`https://audio.qurancdn.com/${item}`, '', (error, _sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound1.play(() => {
        sound1.release();
        alert('succes')
        setCurrentIndex(true)
      });
      setToggleBtn(false)

    });

  };

  const stopSound = (_item, index) => {
    // console.log("toggle")
    if (sound1) {
      sound1.stop(() => {
        console.log('Stop');
      });
    }
    setToggleBtn(false)
  };

  const ItemView = (item, index) => {
    return (
      // <ScrollView >

      <View key={item.id} style={{
        paddingVertical: 10, backgroundColor: 'rgba(98,98,98,0.3)', marginVertical: 10, borderRadius: 10, paddingHorizontal: 10
      }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
          paddingVertical: 10, marginVertical: 10
        }}>
          <TouchableOpacity onPress={() => playSound(item.audio.url)}
            style={{
              width: 30, height: 30, borderRadius: 150, backgroundColor: '#00acc2',
              alignItems: 'center', justifyContent: 'center'
            }}>
            <AntDesign name="caretright" color={'#FFFFFF'} />

            {/* {
  toggleBtn == true && item.id ?
  <AntDesign name="caretright" color={'#FFFFFF'} key={item.id}/>:
  <AntDesign name="pausecircle" color={'#FFFFFF'} key={item.id}/>

} */}
            {/* nme="pausecircle" */}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => stopSound(item.audio.url)}
            style={{
              width: 30, height: 30, borderRadius: 150, backgroundColor: '#00acc2',
              alignItems: 'center', justifyContent: 'center'
            }}>
            <AntDesign name="pausecircle" color={'#FFFFFF'} />

          </TouchableOpacity>

          <Text style={{ fontSize: 17, color: '#FFFFFF' }}>{item.text_indopak}</Text>
        </View>
        <View>
          <Text style={{ color: '#FFFFFF', fontSize: 17 }}>
            {
              item.words.map(word => {
                // console.log(word.verse_key)
                return word.translation.text




              })
            }
          </Text>
          {/* {currentIndex ? <Text>this is hide </Text> : ''} */}
        </View>

      </View>
      // </ScrollView>
      //
    );
  };


  const renderFooter = () => {
    return (
     isLoading ?
      <View>
        <ActivityIndicator     style={{marginBottom:10}}     
        
        color = '#bc2b78'
               size = "large"
 />
      </View> :null
     
    )
  }

  const handleLoadMore=()=>{
    setPageCurrent(pageCurrent+1)
    setIsLoading(true)
  }
  return (
    <BgImage>

      <FlatList
        data={data}
        renderItem={({ item }) => ItemView(item)}
        keyExtractor={(item, index) => item.key}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}

      />

    </BgImage>
  );
};

export default QuranTransScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    flex: 1,
    padding: 5,
  },
  buttonPlay: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(00,80,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonStop: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(80,00,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  feature: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 7,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
  },
});