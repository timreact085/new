import React ,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button , Alert } from 'react-native';
import Header from './components/header';
import {createStore ,combineReducers ,applyMiddleware}  from 'redux'
import { Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk';
import   AppNavigator  from './navigation/AppNavigator'
import { NavigationContainer } from '@react-navigation/native';


import authReducer from './store/reducers/auth'
import deliveryReducer from './store/reducers/delivery'
import productReducer from './store/reducers/product'
import bonusReducer from './store/reducers/bonus'

const rootReducer = combineReducers({
  auth : authReducer,
  delivery : deliveryReducer,
  product : productReducer,
  bonus : bonusReducer
})

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

export default function App() {


  const [Username,setUsername] = useState('')
  const [Password,setPassword] = useState('')
  const [TextT,setText] = useState('')
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);

 


  return (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});