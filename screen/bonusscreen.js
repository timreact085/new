import { useSelector } from 'react-redux';
import  DeliveryItem from '../components/Bonus'
import React, { useState  ,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';
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
import * as BonusAction from '../store/actions/bonus';

const UserDeliverListScreen = props => {


  const [isRefreshing, setIsRefreshing] = useState(false);
  const data = useSelector(state => state.bonus.Bonus);
  const auth = useSelector(state => state.auth);
  const [searchvalue, setsearchvalue] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  
  const dispatch = useDispatch();
  

  useEffect(() => {
    
    const fecthing =   async () => {
       setIsFetching(true)
       await  dispatch(BonusAction.fetchBonus())
       setIsFetching(false)
    }

   
    fecthing()

}, []);

const loadProducts = async  () => {
  setIsRefreshing(true);
  try {
    await  dispatch(BonusAction.fetchBonus())
   
  } 
  catch (err) {
  }
  setIsRefreshing(false);
};

  let title =''
  let i = 0;
  try {
    //console.log(auth.User)
     title = `Xoş Gəldiniz ${auth.User.name} sizin bonus  ${auth.User.bonus} `
  } catch (error) {
     
  }
  console.log(data,567)
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
      <Button  color={Platform.OS === 'android' ? 'black' : 'white'} onPress={() => { props.navigation.navigate('Ana Səhifə') }} title="Ana Səhifə" />
      </View>
    {/* <Header  title='Ləvğ olunan sifarişləriniz'/> */}
    {isFetching ? (
    <ActivityIndicator size="small" style={{flex : 1,marginTop : '20%' }} color={'black'} />) :
     (

      <View>
          <DeliveryItem
              image='https://evol.az/img/delivery.jpg'
              //obje={itemData}
              Date={"Tarix"}
              number={'№'}
              Calc={"Hesablammış"}
              Take={"Götürülmüş"}
            />
    <FlatList
              onRefresh={loadProducts}
              refreshing={isRefreshing}
              style={{ height: '80%' }}
              data={data}
              keyExtractor={item => {i = 0 ; return item.Date;}}
              renderItem={itemData => 
                 {
                  //console.log(i,'isi')
                   i++;
                   return(
                    <DeliveryItem
                      //obje={itemData}
                    
                      Take={itemData.item.BonusExpense}
                      // X_Name={itemData.item.X_Name + ' ' + itemData.item.Y_Name + ' '}  
                      // StatusEnd={itemData.item.Send}
                      // StatusStart={itemData.item.Send} 
                      Date={itemData.item.Date}
                      Calc={itemData.item.BonusArrival}
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
  actions: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    height: '20%',
    paddingHorizontal: 100,
    marginTop : '7%'
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 1,
    paddingTop : '3%',
    width: "100%",
    height: 45,
    marginBottom: 10,
 
    alignItems: "center",
  },
});

export default UserDeliverListScreen;
