import {SET_DATA ,SEARCH_DATA} from   '../actions/bonus';

const initialState = {
    Bonus: [],

};

export default (state = initialState, action) => {
    console.log(action)  
    switch (action.type) {
        case SET_DATA:       
          return {
            Bonus: action.bonus,
          };
        default:
          return state;
      }
};