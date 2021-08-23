import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import CustomButton from '../../component/CustomButton';
import Entypo from 'react-native-vector-icons/Entypo';

import {BgImage} from '../../component/ImageContainer';
import CustomInput from '../../component/InputFileds';
import ReadMoreComp from '../Annoucement/ReadMore';

const ContactForm = () => {
  return (
    <BgImage>
      <View style={styles.container}>
        <View
          style={{
            top: 30,
            height: 80,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={22} color="#ffffff" />
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',

              fontSize: 25,
              fontWeight: '500',
              marginLeft: 40,
            }}>
            Contact Form
          </Text>
        </View>
        <ScrollView
          vertical={true}
          showsVerticalScrollIndicator={false}
          style={{overflow: 'hidden'}}>
          <View style={{paddingHorizontal: 10, marginVertical: 20}}>
            <CustomInput
              plcholder="First Name"
              leftIcon={'user'}
              style={{marginBottom: 15, paddingVertical: 10}}
            />
            <CustomInput
              plcholder="Last Name"
              leftIcon={'user'}
              style={{marginBottom: 15, paddingVertical: 10}}
            />
            <CustomInput
              plcholder="Company Name"
              leftIcon={'user'}
              style={{marginBottom: 15, paddingVertical: 10}}
            />
            <CustomInput
              plcholder="First Name"
              leftIcon={'user'}
              style={{marginBottom: 15, paddingVertical: 10}}
            />
            <CustomInput
              plcholder="Community App"
              leftIcon={'user'}
              style={{marginBottom: 15, paddingVertical: 10}}
            />

            <CustomButton variant={'filled'} title={'Submit'} />
          </View>
        </ScrollView>
      </View>
    </BgImage>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
