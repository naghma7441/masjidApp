import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

import {BgImage} from '../../component/ImageContainer';

const QuranScreen = () => {
  return (
    <BgImage>
      <Text style={{color: 'white'}}>QuranScreen</Text>
    </BgImage>
  );
};

export default QuranScreen;

const styles = StyleSheet.create({
  image: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
  },
});
