import { useSelector } from 'react-redux';
import DeliveryItem from '../components/order'
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import * as authActions from '../store/actions/auth';
import {
  FlatList,
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  TextInput,
  StyleSheet
} from 'react-native';
import Header from '../components/header';
import * as deliveryAction from '../store/actions/delivery';

const UserDeliverListScreen = props => {

  const [isFetching, setIsFetching] = useState(true);
  const [pickedLocation, setPickedLocation] = useState();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const data = useSelector(state => state.delivery.availableDelivery);
  const auth = useSelector(state => state.auth);
  const [searchvalue, setsearchvalue] = useState('');

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

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
        //console.log('loading')
        await dispatch(deliveryAction.fetchDelivery())
      }

    }
    catch (err) {
    }
    setIsRefreshing(false);
  };
  //const transformedData = JSON.parse(auth);
  let title = ''

  title = `Xoş Gəldiniz ${auth.User.name} sizin bonus  ${auth.User.bonus} `

  let i = 0
  return (
    <View>
      <View style={{
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}>
        <Button color={Platform.OS === 'android' ? 'black' : 'white'} onPress={() => { props.navigation.navigate('Ana Səhifə') }} title="Ana Səhifə" />
      </View>
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
              PhoneNumber={"Telefon №"}
              Order={"Sifariş"}
            />
            <FlatList
              onRefresh={loadProducts}
              refreshing={isRefreshing}
              style={{ height: '80%' }}
              data={data}
              keyExtractor={item => { i = 0; return item._id; }}
              renderItem={itemData => {
                //console.log(i, 'isi')
                i++;
                return (
                  <DeliveryItem
                    //obje={itemData}

                    Order={itemData.item.OrderText}
                    // X_Name={itemData.item.X_Name + ' ' + itemData.item.Y_Name + ' '}  
                    // StatusEnd={itemData.item.Send}
                    // StatusStart={itemData.item.Send} 
                    CustumerName={itemData.item.ClientName}
                    PhoneNumber={itemData.item.Phone}
                    number={i}
                  // EndWay={() => {StartWay(itemData.item.ID,2)}}
                  // Login={()=> {props.navigation.navigate('startupscreen')}}
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
  loginBtn: {
    width: "80%",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
  },
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
    width: "100%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    color: 'black',
    width: '100%',
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center',
    marginLeft: 20,
  },
});

export default UserDeliverListScreen;
