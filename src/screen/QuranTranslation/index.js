import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, Text, List} from 'react-native';
import CustomButton from '../../component/CustomButton';

import {BgImage} from '../../component/ImageContainer';
import ReadMoreComp from '../Annoucement/ReadMore';

const QuranTransScreen = () => {
  const [data, setData] = useState();
  const getMoviesFromApi = async () => {
    try {
      let response = await fetch('https://hadeethenc.com/api/v1/languages');
      let responseJson = await response.json();
      console.log('response', responseJson);
      // return responseJson;
      setData(responseJson);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BgImage>
      <Text style={{color: 'white'}}>Quran Translation Screenss</Text>
      <CustomButton
        title={'Submit'}
        variant={'filled'}
        onPress={getMoviesFromApi}
      />
      {data?.map(item => {
        // console.log(item);
        // <List>{item.code}</List>;
        return <Text style={{color: 'white'}}>{item.code}</Text>;
      })}
      <ReadMoreComp />
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
