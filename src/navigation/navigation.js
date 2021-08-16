import React, { useEffect,useState, useMemo ,useReducer} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AppStackNavigator, AuthNavigator } from './index';
import CONSTANT from '../constants';
import { ForgotPassScreen } from '../screen';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../context';
import { useAuth } from '../hook/useAuth';

 export const NavigationApp =()=>{

  const {auth,state}=useAuth();

  console.log("aaaaaaaaa",auth)
  console.log("bbbbbbb",state)



   return(
     <AuthContext.Provider value={auth}>
    <NavigationContainer>


<AppStackNavigator />
</NavigationContainer>


     </AuthContext.Provider>


   )

}

// export default NavigationApp;