import { useSelector } from 'react-redux';
import  ProductItem from '../components/productitem'
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
  StyleSheet
} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Header from '../components/header';
import * as productAction from '../store/actions/product';

const UserDeliverListScreen = props => {

  const [isFetching, setIsFetching] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchvalue, setsearchvalue] = useState('');
  const data = useSelector(state => state.product.availableProducts);
  const auth = useSelector(state => state.auth);
  
  const dispatch = useDispatch();
  
  //const transformedData = JSON.parse(auth);
  let title =''
  console.log(auth.User.name,55555)
    const {productId , productImg ,productTitle} = props.route.params
     title = `Xoş Gəldiniz Valorant`
  console.log(props.route)
  return (
    <View> 
    <Header title={title}/>
     
    <ProductItem  
          
         image={productImg}
          //obje={itemData}
          title={productTitle}
          // X_Name={itemData.item.X_Name + ' ' + itemData.item.Y_Name + ' '}  
          StartWay={() => {}}
          EndWay={() => {}}
        />
    </View>
  );
};





export default UserDeliverListScreen;
