import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

import {BgImage} from '../../component/ImageContainer';

const QuranTransScreen = () => {
  return (
    <BgImage>
      <Text style={{color: 'white'}}>Quran Translation Screen</Text>
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
