import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import CONSTANT from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20
  },
});
const BgImage = ({children}) => {
  return (
    <ImageBackground resizeMode="stretch"
      source={CONSTANT.App.screenImages.bg_Image}
      style={styles.container}>
      {children}
    </ImageBackground>
  );
};
const BgDark = ({children}) => {
  return (
    <ImageBackground
      source={CONSTANT.App.screenImages.bg_Dark}
      style={styles.container}>
      {children}
    </ImageBackground>
  );
};

export {BgImage, BgDark};
