export const LOGIN = 'LOGIN';
export const CHECK = 'CHECK';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';
export const SET_RESET_PASSWORD = 'SET_RESET_PASSWORD';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const setDidTryAL = () => {
  return { type: SET_DID_TRY_AL };
};

export const setResetPassword = (value) => {
  return { type: SET_RESET_PASSWORD, value: value };
};


export const login = (username, password, phoneId) => {
  try {

    return async dispatch => {
      const response = await fetch(
        'https://evolbiznes.az/api/authapp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            password: password,
            phoneId: phoneId
          })
        }
      );

      const resData = await response.json();
      await dispatch({ type: LOGIN, token: resData.token, userId: resData.User.Id, User: resData.User, pushToken: phoneId });
      saveDataToStorage(resData.token, resData.User.Id);
    };
  } catch (error) {
    console.log(error, 12)
  }
};

export const checklogin = (token, userId, tokenPhone) => {
  return async (dispatch, getState) => {
    const auth = await getState().auth;

    fetch(`https://evolbiznes.az/api/checklogin?userId=${userId}&phoneId=${tokenPhone}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(async res => {
        const jsonRes = await res.json();


        if (jsonRes.message === "jwt expired") {
          fetch(`https://evolbiznes.az/api/logout?userId=${auth.User.Id}&phoneId=${auth.pushToken}`, {
            method: 'GET',
          })
            .then(async res => {
              const jsonRes = await res.json();

              if (jsonRes.success === true) {
                await AsyncStorage.removeItem('userData')
                dispatch({ type: LOGOUT });
              }
            })
        }
        else {
          if (jsonRes.value)
            await dispatch({ type: CHECK, token: token, userId: jsonRes.User.Id, auth: jsonRes.value, User: jsonRes.User, pushToken: tokenPhone });
        }

      })

  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    const auth = await getState().auth;
    fetch(`https://evolbiznes.az/api/logout?userId=${auth.User.Id}&phoneId=${auth.pushToken}`, {
      method: 'GET',
    })
      .then(async res => {
        const jsonRes = await res.json();

        if (jsonRes.success === true) {
          await AsyncStorage.removeItem('userData')
          dispatch({ type: LOGOUT });
        }
      })
  };
};



const saveDataToStorage = (token, userId) => {

  var a = new Date((new Date()).valueOf() + 1000 * 3600 * 120000);
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId,
      expiresIn: a
    })
  );
};

