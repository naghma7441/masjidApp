import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, Text, List} from 'react-native';
import CustomButton from '../../component/CustomButton';

import {BgImage} from '../../component/ImageContainer';
import ReadMoreComp from '../Annoucement/ReadMore';

const QuranTransScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getByChapter();
  }, []);

  const getByChapter = async () => {
    try {
      const result = await fetch(
        'https://api.quran.com/api/v4/verses/by_chapter/1?language=ar&words=true&page=1&per_page=10',
      );
      const resJson = await result.json();
      console.log('result', resJson.verses);
      resJson.verses.map(item => {
        // console.log("item",item)
        setData(item.words);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <BgImage>
      <Text style={{color: 'white'}}>Quran Translation Screen</Text>
      {console.log('data', data)}

      {data.length > 0 &&
        data.map(word => {
          console.log('word', word.transliteration.text);

          return (
            <View>
              <Text style={{fontSize: 12, color: '#FFFFFF'}}>
                {word.translation.text}
              </Text>
              <Text style={{fontSize: 12, color: '#FFFFFF'}}>
                {word.transliteration.text}
              </Text>
            </View>
          );
        })}
    </BgImage>
  );
};

export default QuranTransScreen;

const styles = StyleSheet.create({
  image: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
  },
});
