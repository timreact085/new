import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator ,DrawerItemList } from "@react-navigation/drawer";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
//import { createSwitchNavigator } from "react-navigation-switch";
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ResetPasswordScreen from '../screen/resetpasswordscreen'
import DeliveryScreen  from '../screen/userscreen'
import HomeOrderScreen  from '../screen/homeorderscreen'
import ProductScreen  from '../screen/productscreen'
import createorderscreen  from '../screen/createorderscreen'
import autosellscreen  from '../screen/autosellscreen'
import cancelorderscreen  from '../screen/cancelorderscreen'
import Bonusscreen  from '../screen/bonusscreen'
import InviteFriend  from '../screen/invitefriendscreen'
import getproductScreen  from '../screen/getproductscreen'
import LoginScreen from '../screen/loginscreen'
import * as authActions from '../store/actions/auth';
import StartUpScreen from '../screen/startupscreen'


const defaultNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? 'black' : 'black'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : 'white'
  };

const DeliveryStackNavigator = createStackNavigator();

export const DeliveryNavigator = () => {
    return (
      <DeliveryStackNavigator.Navigator 
        screenOptions={{
            headerShown: false
        }}>
        <DeliveryStackNavigator.Screen
          name="homescreen"
          component={DeliveryScreen}
          //options={UserScreenOption}
        />
      </DeliveryStackNavigator.Navigator>
    );
  };

  export const BonusNavigator = () => {
    return (
      <DeliveryStackNavigator.Navigator 
        screenOptions={{
            headerShown: false
        }}>
        <DeliveryStackNavigator.Screen
          name="bonusscreen"
          component={Bonusscreen}
          //options={UserScreenOption}
        />
      </DeliveryStackNavigator.Navigator>
    );
  };

  const ProductsStackNavigator = createStackNavigator();
  export const ProductNavigator = () => {
    return (
      <ProductsStackNavigator.Navigator
      screenOptions={{
        headerShown: false
    }}
       >
        <ProductsStackNavigator.Screen
          name="productscreen"
          component={ProductScreen}
          //options={UserScreenOption}
        />
        <ProductsStackNavigator.Screen
          name="autoorderscreen"
          component={autosellscreen}
          //options={UserScreenOption}
        />
      </ProductsStackNavigator.Navigator>
    );
  };

  
  export const OrderNavigator = () => {
    return (
      <DeliveryStackNavigator.Navigator
      screenOptions={{
        headerShown: false
    }}>
        <DeliveryStackNavigator.Screen
          name="orderscreen"
          component={createorderscreen}
          //options={UserScreenOption}
        />
      </DeliveryStackNavigator.Navigator>
    );
  };

  export const CancelOrderNavigator = () => {
    return (
      <DeliveryStackNavigator.Navigator
      screenOptions={{
        headerShown: false
    }}>
        <DeliveryStackNavigator.Screen
          name="cancelorderscreen"
          component={cancelorderscreen}
          //options={UserScreenOption}
        />
      </DeliveryStackNavigator.Navigator>
    );
  };

  export const HomeOrderNavigator = () => {
    return (
      <DeliveryStackNavigator.Navigator
      screenOptions={{
        headerShown: false
    }}>
        <DeliveryStackNavigator.Screen
          name="homeorderscreen"
          component={HomeOrderScreen}
          //options={UserScreenOption}
        />
      </DeliveryStackNavigator.Navigator>
    );
  };
  export const InviteFriendNavigator = () => {
    return (
      <DeliveryStackNavigator.Navigator
      screenOptions={{
        headerShown: false
    }}>
        <DeliveryStackNavigator.Screen
          name="invitefriend"
          component={InviteFriend}
          //options={UserScreenOption}
        />
      </DeliveryStackNavigator.Navigator>
    );
  };

  

  const ShopDrawerNavigator = createDrawerNavigator();

  export const ShopNavigator = () => {
    const dispatch = useDispatch();
  
    return (
      <ShopDrawerNavigator.Navigator
        drawerContent={props => {
          return (
            <View style={{ flex: 1, paddingTop: 20 }}>
              <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                
                <DrawerItemList {...props} />
                <Button
                  title="Çıxış Et"
                  color={'black'}
                  onPress={() => {
                    dispatch(authActions.logout());
                    // props.navigation.navigate('Auth');
                  }}
                />
              </SafeAreaView>
            </View>
          );
        }}
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#e65825',
            },
            activeTintColor: 'black'
        }}
      >
        <ShopDrawerNavigator.Screen
          name="Ana Səhifə"
          component={DeliveryNavigator}
          options={{
            drawerIcon: props => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                size={23}
                color={'black'}
              />
            )
          }} 
        />
        <ShopDrawerNavigator.Screen
          name="Müştəri Yönəlt"
          component={OrderNavigator}
          options={{
            drawerIcon: props => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                size={23}
                color={'black'}
              />
            )
          }}
        />
         <ShopDrawerNavigator.Screen
          name="Yönləndirdiyim Müştərilər"
          component={HomeOrderNavigator}
          options={{
            drawerIcon: props => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                size={23}
                color={'black'}
              />
            )
          }} 
        />

      
        <ShopDrawerNavigator.Screen
          name="Öz şəbəkəni genişləndir"
          component={InviteFriendNavigator}
          options={{
            drawerIcon: props => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-add-circle' : 'ios-add-circle'}
                size={23}
                color={'black'}
              />
            )
          }}
        />
         <ShopDrawerNavigator.Screen
          name="Ləvğ olunan sifarişlər"
          component={CancelOrderNavigator}
          options={{
            drawerIcon: props => (
              <Ionicons
                name={Platform.OS === 'android' ? 'close' : 'close'}
                size={23}
                color={'black'}
              />
            )
          }}
        />
         <ShopDrawerNavigator.Screen
          name="Bonus Hesbatı"
          component={BonusNavigator}
          options={{
            drawerIcon: props => (
              <Ionicons
                name={Platform.OS === 'android' ? 'checkbox' : 'checkbox'}
                size={23}
                color={'black'}
              />
            )
          }}
        />
          <ShopDrawerNavigator.Screen
          name="Məhsullar"
          component={ProductNavigator}
          options={{
            drawerIcon: props => (
              <Ionicons
                name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                size={23}
                color={'black'}
              />
            )
          }}
        />
      </ShopDrawerNavigator.Navigator>
      
    );
  };

  const AuthStackNavigator = createStackNavigator();

  const ResetPasswordStackNavigator = createStackNavigator();

  export const PasswordResetNavigator = () => {
    return (
      <ResetPasswordStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <ResetPasswordStackNavigator.Screen
          name="Şifrə Yeniləmə"
          component={ResetPasswordScreen}
        />
      </ResetPasswordStackNavigator.Navigator>
    );
  };

  export const AuthNavigator = () => {
    return (
      <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <AuthStackNavigator.Screen
          name="Giriş"
          component={LoginScreen}
        />
      </AuthStackNavigator.Navigator>
    );
  };

