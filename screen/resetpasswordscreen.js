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


const UserResetPasswordScreen = props => {

  const dispatch = useDispatch();
  const [PassportFIN, setPassportFIN] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSms, setIsLoadingSms] = useState(false);
  const [error, setError] = useState();

  let i = 0;

  
  useEffect(() => {
    if (error) {
      Alert.alert('Giriş xətası!', 'Ad və ya şifrə yalnış daxil edilib', [{ text: 'Okay' }]);
    }
  }, [error]);


  const GoBackHandler = async () => {
    ////console.log(11)
    let action;
    action = authActions.setResetPassword(false);

 
    try {
      await dispatch(action);
   
  
    } catch (err) {
      i++;
      setError(err.message + String(i))
      ////console.log(err)

    }
  }



  const ResetPasswordHandler = async () => {
    setIsLoadingSms(true)
    ////console.log('oldu')
    if(PassportFIN.length !== 7)
    {
      Alert.alert('Xəta baş verdi!', 'Zəhmət olmasa Fin kodu düzgün yazın', [{ text: 'Okay' }]);
      setIsLoadingSms(false)
      return;
    }
    const response = await fetch(
      'https://evolbiznes.az/api/resetpassword',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          PassportFIN : PassportFIN,
        })
      }
    );
    const resData = await response.json();
    ////console.log(resData,5555555)
    if(resData.success === false)
    {
      Alert.alert('Xəta baş verdi!', 'Zəhmət olmasa yenidən yoxlayın', [{ text: 'Okay' }]);
      setIsLoadingSms(false)
      return
    }
    Alert.alert('Uğurlu Əməliyyat!', 'Size Yenileme Link Göndərildi!', [{ text: 'Okay' }]);
    setIsLoadingSms(false)
  }
  return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <TextInput
          style={styles.TextInput}
          placeholder="Telefon nomresi daxil edin "
          placeholderTextColor="white"
          onChangeText={setPassportFIN}
          maxLength={7}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}>
        {/* <Text style={styles.loginText}>LOGIN</Text> */}
        {isLoadingSms ? (
                <ActivityIndicator size="small" color={'white'} />
              ) : (
                <Button style={styles.loginBtn} color={Platform.OS === 'android' ? 'black' : 'white'} onPress={ResetPasswordHandler} title="Yenilənmə Link Al" />
              )}
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
            <Button style={styles.loginBtn} color={Platform.OS === 'android' ? 'black' : 'white'} onPress={GoBackHandler} title="Giriş Səhifəsi" />
        
      </TouchableOpacity>
    </View>
  );
};

UserResetPasswordScreen.navigationOptions = {
  headerTitle: 'Giris Paneli'
};

export default UserResetPasswordScreen;


// const styles = StyleSheet.create({
//   screen: {
//     padding: 50
//   },
//   inputContainer: {
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   input: {
//     width: '80%',
//     borderColor: 'black',
//     borderWidth: 1,
//     padding: 10
//   }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
  },
});
