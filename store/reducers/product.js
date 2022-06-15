

import {SET_DATA , SEARCH_DATA} from   '../actions/product';

const initialState = {
    availableProducts: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
          return {
            availableProducts: action.product,
          };
        case SEARCH_DATA:
          return {
            availableProducts: action.searchproduct,
          };
        default:
          return state;
      }
};