import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios';
import {BASE_URL} from '../config'
import {createAction} from '../util/createAction';
import {sleep} from '../util/sleep'
import CONSTANT from '../constants';

export function useAuth() {
    const [state, dispatch] = React.useReducer(
        (state, action) => {
            switch (action.type) {
                case 'SET_USER':
                    return {
                        ...state,
                        user: { ...action.payload },
                    };
                case 'REMOVE_USER':
                    return {
                        ...state,
                        user: undefined,
                    };
                case 'SET_LOADING':
                    return {
                        ...state,
                        loading: action.payload,
                    };
                default:
                    return state;
            }
        },
        {
            user: undefined,
            loading: true,
        },
    );

    const auth=React.useMemo(
        ()=>({
            login:async(email,password)=>{
                console.log("hhh")
                var data={
                    email,
                    password
                }

                var response=await fetch('http://172.20.32.1:4000/login',{
                    method:'POST',
                    headers:{
                        "Content-Type": 'application/json'

                    },
                    body:JSON.stringify(data)
                })
                var jsonResponse = await response.json();
                console.log("jsonResponse", jsonResponse)

                if(jsonResponse.token !== undefined){

                    console.log()

               const token=await AsyncStorage.setItem('user',JSON.stringify(jsonResponse.token))
               console.log("token ",token)
                    dispatch(createAction('SET_USER',JSON.stringify(jsonResponse.token)))


                }else{
                    console.log(jsonResponse.error)
                }


            },
            logout: async () => {
                await AsyncStorage.clear();
                await AsyncStorage.removeItem('user');
                dispatch(createAction('REMOVE_USER'));
            },

        })
    )

    useEffect(()=>{
        AsyncStorage.getItem('user').then(user=>{
            console.log("user",user)
            if(user){
                dispatch(createAction('SET_USER',user))
            }
            dispatch(createAction('SET_LOADING', false));

        })

    },[])

    return {auth,state}
}