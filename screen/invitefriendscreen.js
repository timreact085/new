import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
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
import axios from 'axios'


const UserLoginScreen = props => {

  const dispatch = useDispatch();
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [Name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();
  const auth = useSelector(state => state.auth);

  let i = 0;

  
  useEffect(() => {
    if (error) {
      Alert.alert('Giriş xətası!', 'Ad və ya şifrə yalnış daxil edilib', [{ text: 'Okay' }]);
    }
  }, [error]);

  const SendPhoneNumber = async () => {
    ////////////console.log(PhoneNumber.length)
    if(PhoneNumber.length !== 10)
    {
      Alert.alert('Nömrə forması yalnışdır!', 'Nömrə 10 simvoldan ibarət olmalıdır', [{ text: 'Okay' }]);
      setPhoneNumber('')
      return;
    }
    ////////////console.log(auth.User,22)
    const mesajbody = `http://api.msm.az/sendsms?user=woodpeckerapi&password=mqg4u9Q8&gsm=${PhoneNumber}&from=WCTM&text=https://evolbiznes.az/${auth.User.Id}`;
    await axios.get(mesajbody)
        .then(function (response) {
            setPhoneNumber('')
            Alert.alert('Uğurlu Əməliyyat!', 'Bu nömrəyə qeydiyyat linki göndərildi', [{ text: 'Okay' }]);
        })
    
  }

  return (
    <View style={styles.container}>
    <View style={styles.homebutton}>
      <Button  color={Platform.OS === 'android' ? 'black' : 'white'} onPress={() => { props.navigation.navigate('Ana Səhifə') }} title="Ana Səhifə" />
      </View>
      <StatusBar style="auto" />

      <View style={styles.inputView}>
      <TextInput
          style={styles.TextInput}
          placeholder="Adını daxil edin"
          placeholderTextColor="white"
          value={Name}
          onChangeText={setName}
          // onChangeText={setPhoneNumber}
          // value={PhoneNumber}
        />
     
      </View>
      <View style={styles.inputView}>
      <TextInput
          style={styles.TextInput}
          placeholder="Şəbəkəyə qoşduğunuz şəxsi  nömrəsini yazin"
          placeholderTextColor="white"
          onChangeText={setPhoneNumber}
          keyboardType = 'numeric'
          maxLength={10}
          value={PhoneNumber}
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
                <Button style={styles.loginBtn} color={Platform.OS === 'android' ? 'black' : 'white'} onPress={() => {SendPhoneNumber()}} title="Dostunu Dəvət Et" />
              )}
        
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
 
  inputView: {
    backgroundColor: "#e65825",
    borderRadius: 10,
    width: "80%",
    height: 40,
    marginBottom: 2,
    marginTop : '10%',
 
    alignItems: "center",
  },
 
  TextInput: {
    color : 'white',
    width : '100%',
    height: 50,
    flex: 1,
    padding: 5,
    textAlign : 'center',
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  
  loginBtn: {
    width: "60%",
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
