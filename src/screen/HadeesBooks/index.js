import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

import {BgImage} from '../../component/ImageContainer';

const HadeesScreen = () => {
  return (
    <BgImage>
      <Text style={{color: 'white'}}>Hadees Books Screen</Text>
    </BgImage>
  );
};

export default HadeesScreen;

const styles = StyleSheet.create({
  image: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
  },
});
