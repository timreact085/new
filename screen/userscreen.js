import { useSelector } from 'react-redux';
import DeliveryItem from '../components/order'
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import * as authActions from '../store/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FlatList,
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions 
} from 'react-native';
import Header from '../components/header';
import * as deliveryAction from '../store/actions/delivery';
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'

Notifications.setNotificationHandler({
  handleNotification : async () => {
    return {
      shouldShowAlert : true,
    }
  }  })

const UserDeliverListScreen = props => {

  const [isFetching, setIsFetching] = useState(true);
  const [pickedLocation, setPickedLocation] = useState();
  const data = useSelector(state => state.delivery.availableDelivery);
  const auth = useSelector(state => state.auth);
  const [pushToken, setPushToken] = useState();

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {

    const fecthing = async () => {
      setIsFetching(true)
      await dispatch(deliveryAction.fetchDelivery())
      setIsFetching(false)
    }

    fecthing();

  }, []);

  const triggerNotificationHandler = async () => {
      // Notifications.scheduleNotificationAsync({
      //   content : {
      //     title : 'My first local notification',
      //     body : 'Geldime geldim'
      //   },
      //   trigger : {
      //     seconds : 5,
      //   }
       
      // })

      // const a = `ZwYKQZHDFasgsxVnBKau8J`
      // //console.log(pushToken,'tokenpushhh')
    try {
      fetch(`https://evolbiznes.az/api/pushnotifications?text2=${pushToken}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Accept-Encoding': 'gzip, deflate',
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      //console.log(error)
      Alert.alert('Xəta baş verdi!', 'Zəhmət olmasa yenidən yoxlayın', [{ text: 'Okay' }]);
    }
  }


  // useEffect(() => {
  //   Notifications.getPermissionsAsync()
  //     .then((status) => {
  //       if (status.status !== 'granted') {
  //         return Notifications.getPermissionsAsync();
  //       }
  //       return status;
  //     })
  //     .then((status) => {
  //       if (status.status !== 'granted') {
  //         throw new Error('Permission not granted!');
  //       }
  //     })
  //     .then(() => {
  //       return Notifications.getExpoPushTokenAsync();
  //     })
  //     .then((response) => {
  //       //console.log(response)
  //       const token = response.data;
  //       //console.log(token)
  //       setPushToken(token);
  //     })
  //     .catch(async ( err) => {
  //       const response = await  fetch(`https://evolbiznes.az/api/pushnotifications?text1=Bildirim&text2=${err.message}`, {
  //         method: 'GET',
  //       })
  //       .then(result => {
  //         //console.log(result)
  //       })
  //       .catch(err => {
  //         //console.log(err)
  //       })
  //       //console.log(err);
  //       return null;
  //     });
  // }, []);
  // useEffect(() => {
  //   const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(
  //     (response) => {
  //     //  //console.log(response);
  //     }
  //   );

  //   const foregroundSubscription = Notifications.addNotificationReceivedListener(
  //     (notification) => {
  //    //   //console.log(notification);
  //     }
  //   );

  //   return () => {
  //     backgroundSubscription.remove();
  //     foregroundSubscription.remove();
  //   };
  // }, []);

  let title = ''
  let network = ''
  let sell = ''
  ////console.log(auth.User)
  const refreshingNetwork = async () => {
    const userData = await AsyncStorage.getItem('userData');
  const transformedData = JSON.parse(userData);
  const { token, userId , expiresIn} = transformedData;
  dispatch(authActions.checklogin(token,userId,''))
  }
  //refreshingNetwork();
  title = `Xoş Gəldiniz ${auth.User.name}  `
  network = `Sizin bonus  ${auth.User.bonus} Şəbəkə sayınız ${auth.User.network} `
try {
  console.log(data.length)
  sell = `Yönləndirdiyiniz müştərilər ${data.length}`
} catch (error) {
  console.log(123123)
  sell = `Yönləndirdiyiniz müştərilər 0`
}
  return (

    <View style={styles.container}>
      <Header title={title} />
      <Header title={network} />
      <Header title={sell} />
      <StatusBar style="auto" />
 

 
      {/* <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity> */}
      {/* {auth.User.UserFin === '6KE0PTG' ? (<TouchableOpacity style={styles.loginBtn}>
        <Button style={styles.loginBtn} color={Platform.OS === 'android' ? '#e65825' : 'white'} onPress={() => { triggerNotificationHandler() }} title="Bildirim" />
      </TouchableOpacity>) : null} */}
      <ScrollView  
          contentContainerStyle={{
      
            justifyContent: 'center',
            alignItems : 'center',
            width: screenWidth ,
          }}>
      <TouchableOpacity style={styles.loginBtn}>
        <Button style={styles.loginBtn} color={Platform.OS === 'android' ? '#e65825' : 'white'} onPress={() => { props.navigation.navigate('Müştəri Yönəlt') }} title="Müştəri Yönəlt" />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.loginBtn}>
        <Button style={styles.loginBtn} color={Platform.OS === 'android' ? '#e65825' : 'white'} onPress={() => { props.navigation.navigate('Yönləndirdiyim Müştərilər') }} title="Yönləndirdiyim Müştərilər" />
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.loginBtn}>
      <Button style={styles.loginBtn} color={Platform.OS === 'android' ? '#e65825' : 'white'} onPress={() => { props.navigation.navigate('Öz şəbəkəni genişləndir') }} title="Öz şəbəkəni genişləndir" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
      <Button style={styles.loginBtn} color={Platform.OS === 'android' ? '#e65825' : 'white'} onPress={() => { props.navigation.navigate('Ləvğ olunan sifarişlər') }} title="Ləvğ olunan sifarişlər" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
      <Button style={styles.loginButton} color={Platform.OS === 'android' ? '#e65825' : 'white'} onPress={() => { props.navigation.navigate('Bonus Hesbatı') }} title="Bonus Hesabatı" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
      <Button style={styles.loginBtn} color={Platform.OS === 'android' ? '#e65825' : 'white'} onPress={() => { props.navigation.navigate('Məhsullar') }} title="Məhsullar" />
      </TouchableOpacity>
      </ScrollView>
    </View>
    // <View style={styles.container}>
    //   <Header title={title} />
    //   <View style={styles.inputView}>
    //   <Button style={styles.loginBtn} color={Platform.OS === 'android' ? 'green' : 'white'} onPress={() => { props.navigation.navigate('Müştəri Yönəlt') }} title="Sifarişlərim" />
    //   <Button style={styles.loginBtn} color={Platform.OS === 'android' ? 'green' : 'white'} onPress={() => { props.navigation.navigate('Müştəri Yönəlt') }} title="Müştəri Yönəlt" />
    //   <Button style={styles.loginBtn} color={Platform.OS === 'android' ? 'green' : 'white'} onPress={() => { props.navigation.navigate('Müştəri Yönəlt') }} title="Məhsullar" />
    //   <Button style={styles.loginBtn} color={Platform.OS === 'android' ? 'green' : 'white'} onPress={() => { props.navigation.navigate('Müştəri Yönəlt') }} title="Biznesi genişləndir" />
    //   <Button style={styles.loginBtn} color={Platform.OS === 'android' ? 'green' : 'white'} onPress={() => { props.navigation.navigate('Müştəri Yönəlt') }} title="Ləvğ olunan sifarişlər" />
    //   </View>

    // </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'All Products',
  };
};

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
    backgroundColor: "#e65825",
  },
  loginButton: {
    width: "100%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#e65825",
  },

});

export default UserDeliverListScreen;
