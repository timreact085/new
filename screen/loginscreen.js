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
import * as Notifications from 'expo-notifications'


const UserLoginScreen = props => {

  const dispatch = useDispatch();
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [pushToken, setPushToken] = useState();
 
  const auth = useSelector(state => state.auth);

  let i = 0;

  useEffect(() => {
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
      .then((response) => {
        ////console.log(response)
        const token = response.data;
        ////console.log(token)
        setPushToken(token);
      })
      .catch(async ( err) => {
        const response = await  fetch(`https://evolbiznes.az/api/pushnotifications?text1=Bildirim&text2=${err.message}`, {
          method: 'GET',
        })
        .then(result => {
          ////console.log(result)
        })
        .catch(err => {
          ////console.log(err)
        })
        ////console.log(err);
        return null;
      });
  }, []);
  useEffect(() => {
    const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
      //  ////console.log(response);
      }
    );

    const foregroundSubscription = Notifications.addNotificationReceivedListener(
      (notification) => {
     //   ////console.log(notification);
      }
    );

    return () => {
      backgroundSubscription.remove();
      foregroundSubscription.remove();
    };
  }, []);


  useEffect(() => {
    if (error) {
      Alert.alert('Giriş xətası!', 'Ad və ya şifrə yalnış daxil edilib', [{ text: 'Okay' }]);
    }
  }, [error]);


  const LoginHandler = async () => {
    ////console.log(pushToken)
    let action;
    const payload = {
      username: Username,
      password: Password,
    };
    action = authActions.login(Username, Password,pushToken);

   
    setIsLoading(true);
 
    try {
      await dispatch(action);
  
    } catch (err) {
      i++;
      setError(err.message + String(i))
      ////console.log(err)
      setIsLoading(false);
    }
  }



  const ResetHandler = async () => {
    ////console.log(11)
    let action;
    action = authActions.setResetPassword(true);

   
 
    try {
      await dispatch(action);
     
  
    } catch (err) {
      i++;
      setError(err.message + String(i))
      ////z(err)
  
    }
  }


  const ResetPasswordHandler = async () => {
    setIsLoadingSms(true)
  
  
    const response = await fetch(
      'https://evolbiznes.az/api/ordersendapp',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          FIN : User.PassportFIN,
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
          placeholder="istifadəçi adı  daxil edin"
          placeholderTextColor="white"
          onChangeText={setUsername}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Şifrə daxil edin"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={setPassword}
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
                <Button style={styles.loginBtn} color={Platform.OS === 'android' ? 'black' : 'white'} onPress={LoginHandler} title="Giriş Et" />
              )}
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
      <Button style={styles.loginBtn} color={Platform.OS === 'android' ? 'black' : 'white'} onPress={ResetHandler} title="Şifrəni unutmusan ?" />
        
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.loginBtn}>
        {isLoadingSms ? (
                <ActivityIndicator size="small" color={'white'} />
              ) : (
                <Button style={styles.loginBtn} color={Platform.OS === 'android' ? 'black' : 'white'} onPress={ResetPasswordHandler} title="Şifrəni unutmusan ?" />
              )}
        
      </TouchableOpacity> */}
    </View>
  );
};

UserLoginScreen.navigationOptions = {
  headerTitle: 'Giris Paneli'
};

export default UserLoginScreen;


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
