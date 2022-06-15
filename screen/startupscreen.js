import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import DeliveryItem from '../components/deliveryitem'
import React, { useState, useEffect, useReducer, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/header';
import axios from 'axios'
import {
  FlatList,
  View,
  Button,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
  StyleSheet
} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as authActions from '../store/actions/auth';
import * as Notifications from 'expo-notifications'


const UserLoginScreen = props => {

  const dispatch = useDispatch();
  const [pushToken, setPushToken] = useState();

  useEffect(() => {

    const getExpoPushToken = async () => {
      Notifications.getPermissionsAsync()
      .then((status) => {
        if (status.status !== 'granted') {
          return Notifications.getPermissionsAsync();
        }
        return status;
      })
      .then((status) => {
        if (status.status !== 'granted') {
          throw new Error('Permission not granted!');
        }
      })
      .then(() => {
        return Notifications.getExpoPushTokenAsync();
      })
      .then(async response => {
        const token = response.data;
       await  tryLogin(response);
      })
      .catch(async ( err) => {
        ////console.log(err);
        return null;
      });
    }

    const tryLogin = async (tokenPhone) => {
    
        //await dispatch(authActions.logout())
      //  await  AsyncStorage.removeItem('userData')
      ////console.log(tokenPhone.data,'token')
      const userData = await AsyncStorage.getItem('userData');
     ////console.log(userData,323)
      if (!userData) {
        dispatch(authActions.setDidTryAL());
        return;
      }
      let action; 

      const transformedData = JSON.parse(userData);
      const { token, userId , expiresIn} = transformedData;


      
      if (expiresIn <= new Date() || !token || !userId) {
        ////console.log('testetstestset')
        if(userId)
        {

        }
        dispatch(authActions.setDidTryAL());
        return;
      }
      else{
        await dispatch(authActions.checklogin(token,userId,tokenPhone.data))

      }
     
      
    };

    getExpoPushToken();
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
    </View>
  );
};

export default UserLoginScreen;



