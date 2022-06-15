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
  StyleSheet,
  TextInput
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
  
  useEffect(() => {
    
    const fecthing =   async () => {
       setIsFetching(true)
       await  dispatch(productAction.fetchProducts())
       setIsFetching(false)
    }

     const serarching =   async () => {
       setIsFetching(true)
       await  dispatch(productAction.fetchProducts())
     await  dispatch(productAction.SearchProducts(searchvalue))
     setIsFetching(false)
  
  }
   
    if(searchvalue.length > 0)
    {
      serarching()
    }
    else{
    
     fecthing();
    }
}, [searchvalue]);




  const loadProducts = async  () => {
    setIsRefreshing(true);
    try {
      if(searchvalue.length > 0)
      {
        await  dispatch(productAction.fetchProducts())
        await  dispatch(productAction.SearchProducts(searchvalue))
      }
      else{

        await  dispatch(productAction.fetchProducts())
      }
     
    } 
    catch (err) {
    }
    setIsRefreshing(false);
  };


  const selectItemHandler = (id, title , imgUrl) => {
      console.log(2)
      props.navigation.navigate('autoorderscreen', {
        productId: id,
        productTitle: title,
        productImg : imgUrl
      })
    // props.navigation.push('ProductDetail'

    // );
  };



  //const transformedData = JSON.parse(auth);
  let title =''
  try {
     title = `Xoş Gəldiniz ${auth.User.name}`
  } catch (error) {
     
  }
  ////////console.log(auth,321)
  return (
    <View> 
   <View style={{
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  }}>
      <Button  color={Platform.OS === 'android' ? 'black' : 'white'} onPress={() => { props.navigation.navigate('Ana Səhifə') }} title="Ana Səhifə" />
      </View>
    <View style={styles.inputView}>
          <TextInput
              style={styles.TextInput}
              placeholder="Axtardığınız məhsulun adını yazın"
              placeholderTextColor="white"
              onChangeText={setsearchvalue}
            />
        </View>
   
    {isFetching ? (
    <ActivityIndicator size="small" style={{flex : 1,marginTop : '20%' }} color={'black'} />) :
     (

      <FlatList
      onRefresh={loadProducts}
      refreshing={isRefreshing}
      style={{height : '100%'}}
      data={data} 
      keyExtractor={item => item.Id}
      renderItem={itemData => ( 
        <ProductItem  
          
         image={`https://evol.az/img/${itemData.item.ItemCode}.jpg`}
          //obje={itemData}
          title={itemData.item.ItemName}
          // X_Name={itemData.item.X_Name + ' ' + itemData.item.Y_Name + ' '}  
          StatusEnd={itemData.item.StatusEnd}
          StatusStart={itemData.item.StatusStart} 
          StartWay={() => {}}
          EndWay={() => {}}
          Basket={() => {selectItemHandler("1",itemData.item.ItemName,"3")}}
          GetProduct={() => {selectItemHandler(itemData.item.ItemCode,itemData.item.ItemName,`https://evol.az/img/${itemData.item.ItemCode}.jpg`)}}
        />
        
      )}
    />       
      )}
  
    </View>
    
  );

  // <View> 
  //   <Header title={''}/>
  //   <View style={styles.inputView}>
  //         <TextInput
  //             style={styles.TextInput}
  //             placeholder="Axtarış edin"
  //             placeholderTextColor="black"
  //             onChangeText={setsearchvalue}
  //           />
  //       </View>
  //   <FlatList
  //     onRefresh={loadProducts}
  //     refreshing={isRefreshing}
  //     style={{height : '100%'}}
  //     data={data} 
  //     keyExtractor={item => item.Id}
  //     renderItem={itemData => ( 
  //       <ProductItem  
          
  //        image={`https://evol.az/img/${itemData.item.ItemCode}.jpg`}
  //         //obje={itemData}
  //         title={itemData.item.ItemName}
  //         // X_Name={itemData.item.X_Name + ' ' + itemData.item.Y_Name + ' '}  
  //         StatusEnd={itemData.item.StatusEnd}
  //         StatusStart={itemData.item.StatusStart} 
  //         StartWay={() => {}}
  //         EndWay={() => {}}
  //         GetProduct={() => {selectItemHandler(itemData.item.ItemCode,itemData.item.ItemName,`https://evol.az/img/${itemData.item.ItemCode}.jpg`)}}
  //       />
        
  //     )}
  //   />
  //   </View>
};
const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "white",
    borderRadius: 1,
    width: "100%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    color : 'white',
    backgroundColor : 'red',
    width : '100%',
    height: 50,
    flex: 1,
    padding: 10,
    textAlign : 'center',
  },
});


export default UserDeliverListScreen;
