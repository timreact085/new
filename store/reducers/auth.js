import { LOGIN ,CHECK , LOGOUT ,SET_DID_TRY_AL,SET_RESET_PASSWORD } from '../actions/auth';

const initialState = {
  token: null,
  userId: null,
  Authorization : false,
  User : null,
  didTryAutoLogin: false,
  resetPassword : false,
  pushToken : null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log('loginreducer')
      return {
        token: action.token,
        userId: action.userId,
        Authorization : true,
        User : action.User,
        didTryAutoLogin: true,
        pushToken : action.pushToken
      };
    case LOGOUT:
        return {
          token: null,
          userId: null,
          Authorization : false,
          User : null
    };
    case SET_DID_TRY_AL:
      return {
        ...state,
        didTryAutoLogin: true
      };
    case SET_RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.value
      };
    case CHECK:
      //console.log(action)
      return {
        token: action.token,
        userId: action.userId,
        Authorization : action.auth,
        User : action.User,
        didTryAutoLogin: true,
        pushToken : action.pushToken

      };
    default:
      return state;
  }
};
