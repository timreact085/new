import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Header from '../components/header';

import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Platform
} from 'react-native';
import * as authActions from '../store/actions/auth';
import { StatusBar } from "expo-status-bar";


const UserLoginScreen = props => {

  const dispatch = useDispatch();
  const [ClientName, setClientName] = useState('')
  const [Order, setOrder] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [Region, setRegion] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState();
  const auth = useSelector(state => state.auth);

  let i = 0;
  
  useEffect(() => {
    if (error) {
      Alert.alert('Giriş xətası!', 'Ad və ya şifrə yalnış daxil edilib', [{ text: 'OK' }]);
    }
  }, [error]);
  const SendOrder = async () => {
    setIsLoading(true)
  
  
    if(ClientName.length === 0 &&Order.length ===0 && PhoneNumber.length === 0)
    {
      Alert.alert('Məlumatlarda səflik var!', 'Zəhmət olmasa bütün xanaları doldurun', [{ text: 'OK' }]);
      setPhoneNumber('')
      setClientName('')
      setOrder('')
      setRegion('')
      setIsLoading(false)
      return;
    }
    else if(PhoneNumber.length !== 10)
    {
      Alert.alert('Nömrə forması yalnışdır!', 'Nömrə 10 simvoldan ibarət olmalıdır', [{ text: 'OK' }]);
      setPhoneNumber('')
      setClientName('')
      setOrder('')
      setRegion('')
      setIsLoading(false)
      return;
    }
    const response = await fetch(
      'https://evolbiznes.az/api/ordersendapp',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ClientName : ClientName,
          Order: Order,
          Region: Region,
          PhoneNumber : PhoneNumber,
          UserId : auth.User.Id
        })
      },
    );
    const resData = await response.json();
    if(resData.success === false)
    {
      Alert.alert('Xəta baş verdi!', 'Zəhmət olmasa yenidən yoxlayın', [{ text: 'OK' }]);
      setPhoneNumber('')
      setClientName('')
      setOrder('')
      setRegion('')
      setIsLoading(false)
      return
    }
    Alert.alert('Uğurlu Əməliyyat!', 'Sifarişiniz qəbul olundu!', [{ text: 'OK' }]);
    setPhoneNumber('')
    setClientName('')
    setOrder('')
    setRegion('')
    setIsLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.homebutton}>
      <Button  color={Platform.OS === 'android' ? 'black' : 'white'} onPress={() => { props.navigation.navigate('Ana Səhifə') }} title="Ana Səhifə" />
      </View>
      
      <StatusBar style="auto" />
      <View marginTop='10%' style={styles.inputView}>
      <TextInput
          style={styles.TextInput}
          placeholder="Müştərinin adını daxil edin"
          placeholderTextColor="white"
          onChangeText={setClientName}
          value={ClientName}
          disable={true}
          
        />
      </View>
      <View style={styles.inputView}>
      <TextInput
          style={styles.TextInput}
          placeholder="Müştərinin istədiyi məhsul"
          placeholderTextColor="white"
          onChangeText={setOrder}
          value={Order}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Müştərinin telefonu"
          placeholderTextColor="white"
          maxLength={10}
          onChangeText={setPhoneNumber}
          value={PhoneNumber}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Müştərinin Yaşayış yeri"
          placeholderTextColor="white"
          onChangeText={setRegion}
          value={Region}
        />
      </View>
  
      {/* <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity> */}
 
      <TouchableOpacity style={styles.loginBtn}>
        {/* <Text style={styles.loginText}>LOGIN</Text> */}
        {isLoading ? (
                <ActivityIndicator size="small" color={'white'} />
              ) : (
                <Button style={styles.loginBtn}  color={Platform.OS === 'android' ? 'black' : 'white'} onPress={() => SendOrder()} title="Müştərini yönləndir" />
              )
        }
      </TouchableOpacity>
    </View>
  );
};

UserLoginScreen.navigationOptions = {
  headerTitle: 'Giris Paneli'
};

export default UserLoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

  },
 
  image: {
    marginBottom: 40,
  },
  
 
  inputView: {
    backgroundColor: "#e65825",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
   
 
    alignItems: "center",
  },
 
  TextInput: {
    color : 'white',
    width : '100%',
    height: 50,
    flex: 1,
    padding: 10,
    textAlign : 'center',
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
  },

  homebutton: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
