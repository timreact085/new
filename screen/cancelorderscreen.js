import { useSelector } from 'react-redux';
import DeliveryItem from '../components/cancelorder'
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';
//import Prompt from 'react-native-prompt-crossplatform';
import Prompt from 'react-native-input-prompt';

import {
  FlatList,
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
  TextInput
} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Header from '../components/header';
import * as deliveryAction from '../store/actions/delivery';

const UserDeliverListScreen = props => {


  const [isRefreshing, setIsRefreshing] = useState(false);
  const data = useSelector(state => state.delivery.cancelDelivery);
  const auth = useSelector(state => state.auth);
  const [searchvalue, setsearchvalue] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [alertStatus, setalertStatus] = useState(false);
  const [Accept, setAccept] = useState({ OrderText: '', ClientName: '', Phone: '', _id: '' });

  const dispatch = useDispatch();


  useEffect(() => {

    const fecthing = async () => {
      setIsFetching(true)
      await dispatch(deliveryAction.fetchDelivery())
      setIsFetching(false)
    }

    const serarching = async () => {
      setIsFetching(true)
      await dispatch(deliveryAction.SearchDelivery(searchvalue))
      setIsFetching(false)

    }


    if (searchvalue.length > 0) {

      serarching()

    }
    else {

      fecthing();
    }

  }, [searchvalue]);

  const loadProducts = async () => {
    setIsRefreshing(true);
    try {
      if (searchvalue.length > 0) {
        await dispatch(deliveryAction.SearchDelivery(searchvalue))
      }
      else {
        await dispatch(deliveryAction.fetchDelivery())
      }

    }
    catch (err) {
    }
    setIsRefreshing(false);
  };

  const writecomment = async (OrderText, ClientName, Phone, _id) => {
    //console.log(OrderText,ClientName,Phone,_id)
    setAccept({ OrderText: OrderText, ClientName: ClientName, Phone: Phone, _id: _id })
    setalertStatus(true)
    // SendCancelOrder(OrderText,_id)
    //console.log(alertStatus)
  }
  const SendCancelOrder = async (OrderText,OrderId) => {
  
    const response = await fetch(
      'https://evolbiznes.az/api/cancelorderapp',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ OrderText: OrderText,  OrderId: OrderId })
      }
    );
    const resData = await response.json();
    //console.log(resData,33333333333)
    if(resData.success === false)
    {
      Alert.alert('Xəta baş verdi!', 'Zəhmət olmasa yenidən yoxlayın', [{ text: 'Okay' }]);
      return
    }
    Alert.alert('Uğurlu Əməliyyat!', 'Sifarişiniz ləğv olundu!', [{ text: 'Okay' }]);
  }

  let title = ''
  let i = 0;
  try {

    title = `Xoş Gəldiniz ${auth.User.name} sizin bonus  ${auth.User.bonus} `
  } catch (error) {

  }
  ////console.log(auth,321)
  return (
    <View>
      {/* //<Header  title={title}/> */}
      <View style={{
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}>
        <Button color={Platform.OS === 'android' ? 'black' : 'white'} onPress={() => { props.navigation.navigate('Ana Səhifə') }} title="Ana Səhifə" />
      </View>
      {/* <Header  title='Ləvğ olunan sifarişləriniz'/> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Axtarış edin"
          placeholderTextColor="black"
          onChangeText={setsearchvalue}
        />

      </View>
      {isFetching ? (
        <ActivityIndicator size="small" style={{ flex: 1, marginTop: '20%' }} color={'black'} />) :
        (


          <View>
            <DeliveryItem
              image='https://evol.az/img/delivery.jpg'
              //obje={itemData}
              CustumerName={"Müştəri"}
              number={'№'}
              Order={"Ləğv olunma səbəbi"}
              PhoneNumber={"Telefon №"}
              btnfalse={false}
            />
            <Prompt
              visible={alertStatus}
              title={Accept.ClientName}
              cancelText={'Bağla'}
              submitText={'Təstiqlə'}
              placeholder={'Qeydinizi daxil edin'}
              onCancel={() => { setalertStatus(false) }}
              onSubmit={text =>{  SendCancelOrder(text,Accept._id);setalertStatus(false)}
            }
            />
            {/* <Prompt
              title={Accept.ClientName}
              inputPlaceholder={'Qeydinizi daxil edin'}
              isVisible={alertStatus}
              onChangeText={() => { //console.log(1212) }}
              onCancel={() => { setalertStatus(false) }}
              onSubmit={(value) => writecomment()} /> */}

            <FlatList
              onRefresh={loadProducts}
              refreshing={isRefreshing}
              style={{ height: '80%' }}

              data={data}
              keyExtractor={item => { i = 0; return item._id; }}
              renderItem={itemData => {
                i++;
                return (
                  <DeliveryItem
                    btnfalse={true}
                    CancelCommentOrder={() => { writecomment(itemData.item.OrderText, itemData.item.ClientName, itemData.item.Phone, itemData.item._id) }}
                    CustumerName={itemData.item.ClientName}
                    Order={itemData.item.CancelText}
                    PhoneNumber={itemData.item.Phone}
                    number={i}
                  />

                )

              }
              }
            />
          </View>




        )}

    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'All Products',
  };
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    height: '20%',
    paddingHorizontal: 100,
    marginTop: '7%'
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 1,
    paddingTop: '3%',
    width: "100%",
    height: 45,
    marginBottom: 10,

    alignItems: "center",
  },
});

export default UserDeliverListScreen;
