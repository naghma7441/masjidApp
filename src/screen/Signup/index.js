import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {CheckBox} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import CustomInput, {InputComp} from '../../component/InputFileds';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useState} from 'react';
import {onChange} from 'react-native-reanimated';
import CustomButton from '../../component/CustomButton';
import {AntDesigns, FontAwesomes} from '../../constants/Icons';
import CONSTANT from '../../constants';
import {LoginApi} from '../../services/Auth';
import {useDispatch} from 'react-redux';
import {loginAction} from './action';

import {AuthContext} from '../../context';
import {BgImage} from '../../component/ImageContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // width:'100%',
    // height:'100%',
    padding: 20,
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#515151',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topContain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 99,
    height: 66,
    marginLeft: 100,
  },
  textContain: {
    // width:71,
    // height:31
  },
  text: {
    color: '#A7C829',
    fontWeight: 'bold',
    fontSize: 30,
  },
  paragraph: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 7,
  },
  medium: {
    width: '100%',
    height: 490,
    backgroundColor: CONSTANT.App.colors.boxBgColor,
    borderRadius: 20,
    marginTop: '5%',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#9D9D9D',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginBottom: 20,
  },
  socialBox: {
    width: '100%',
    flexDirection: 'row',

    alignItems: 'center',
    marginTop: 25,
  },
  iconView: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DD4B39',
    justifyContent: 'center',
    padding: 15,
    marginLeft: 5,
    borderRadius: 10,
  },
});
const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [erroremailmsg, setErroremailmsg] = useState('');
  const [errorPassmsg, setErrorPassmsg] = useState('');
  const [data, setData] = useState(false);
  const [isSecure, setSecure] = useState(true);
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrormsg] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [isEmailValid, setEmailValid] = useState('');
  const [isPasswrdValid, setIsPasswrdValid] = useState('');

  const dispatch = useDispatch();
  const {login} = useContext(AuthContext);

  const ValidateEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = async () => {
    var isValid = [];

    if (email === '') {
      isValid.push(false);
      setErrormsg('! Please fill the fileds');
    } else {
      isValid.push(true);
      setErrormsg('');
    }

    if (password === '') {
      isValid.push(false);
      setPass('! Please fill the password fileds');
    } else {
      isValid.push(true);
      setErrormsg('');
    }

    // if(ValidateEmail(email)) {
    //     isValid.push(true)
    //     setErrormsg("")

    // } else {
    //     isValid.push(false)

    //     setErrormsg('! Incorrect email id! Check again');

    // }

    //   if(email==="naghma@gmail.com" && password==='123456'){

    //     isValid.push(false)
    //     setModalVisible(true)

    //     // navigation.navigate(data?CONSTANT.App.screenNames.home:
    //     //     CONSTANT.App.screenNames.login
    //     //     )

    // }else{
    //     isValid.push(true)

    // }

    // if (isValid.includes(false) !== true) {
    //                 navigation.navigate(CONSTANT.App.screenNames.home

    //         )

    // }

    alert('hii');
  };

  return (
    <BgImage>
      <View style={styles.topContain}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={22} color="#ffffff" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.textContain}>
        <Text style={styles.text}>Register</Text>
        <Text style={styles.paragraph}>
          Welcome back! Build your prayer habbits with Athan.
        </Text>
      </View>

      <View style={styles.medium}>
        <CustomInput
          plcholder="Username"
          onTextChange={value => {
            setEmail(value);
          }}
          leftIcon={'user'}
          style={{marginBottom: 15}}
        />

        <CustomInput
          plcholder="Please enter email"
          onTextChange={value => {
            setEmail(value);
          }}
          leftIcon={'mail'}
          style={{marginBottom: 15}}
        />
        <CustomInput
          isSecure={isSecure}
          plcholder="Please enter Password"
          rightIcon={isSecure ? 'eye-off' : 'eye'}
          onTextChange={value => {
            setPassword(value);
          }}
          onRightIconClick={() => {
            setSecure(!isSecure);
          }}
          leftIcon={'lock'}
          style={{marginBottom: 15}}
        />

        <CustomButton
          variant={'filled'}
          title={'Login'}
          onPress={
            onSubmit
            // async () => {
            //     try {
            //         setLoading(false)
            //         await login(email, password)

            //     }
            //     catch (e) {

            //         setLoading(false)
            //     }
            // }
          }
        />
        <View style={{width: '100%', alignItems: 'center', marginTop: 30}}>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 1,
              borderColor: 'grey',
            }}></View>
          <Text
            style={{
              color: '#9D9D9D',
              backgroundColor: '#010417',
              marginTop: -10,
              paddingHorizontal: 10,
            }}>
            or login using
          </Text>
        </View>

        <View style={styles.socialBox}>
          <TouchableOpacity style={[styles.iconView, {marginRight: 5}]}>
            <FontAwesomes name="google" size={25} color={'#FFFFFF'} />
            <Text style={{color: '#FFFFFF', marginLeft: 4}}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconView, {backgroundColor: '#3963BE'}]}>
            <FontAwesomes name="facebook-square" size={25} color={'#FFFFFF'} />
            <Text style={{color: '#FFFFFF', marginLeft: 7}}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.iconView,
            {backgroundColor: '#FFFFFF', marginLeft: '25%', marginTop: 10},
          ]}>
          {/* <FontAwesomes name="facebook-square" size={25} color={'#000000'} /> */}
          <AntDesigns name="apple-o" size={25} color={'#000000'} />
          <Text style={{color: '#000000', marginLeft: 4}}>Apple Id</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          // marginTop: 50,
          paddingHorizontal: 20,
        }}>
        <Text style={styles.paragraph}>Existing user?</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: '#A7C829',
              marginTop: 7,
              fontSize: 16,
              fontWeight: '500',
              left: 3,
            }}
            onPress={() => navigation.navigate(CONSTANT.App.screenNames.login)}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 50,
        }}>
        <Text style={styles.paragraph}>Exsisting?</Text>
        <TouchableOpacity>
          <Text
            style={{color: '#A7C829', marginTop: 10, fontSize: 16}}
            onPress={() => navigation.navigate(CONSTANT.App.screenNames.login)}>
            user
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </BgImage>
  );
};

export default SignUpScreen;
