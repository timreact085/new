import React ,  {useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import * as Notifications from 'expo-notifications'
import { ShopNavigator, AuthNavigator , PasswordResetNavigator } from './delivery';
import StartupScreen from '../screen/startupscreen';



const AppNavigator = props => {

  const resetPassword = useSelector(state => state.auth.resetPassword);
  const isAuth = useSelector(state => !!state.auth.token);
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);


  return (
    <NavigationContainer>
      {resetPassword && <PasswordResetNavigator/>}
      {isAuth && !resetPassword && <ShopNavigator />}
      {!isAuth && didTryAutoLogin && !resetPassword && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && !resetPassword && <StartupScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
