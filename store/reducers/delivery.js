import DELIVERY from '../../data/dummy-data';

import {SET_DATA ,SEARCH_DATA} from   '../actions/delivery';

const initialState = {
    availableDelivery: [],
    cancelDelivery : []

};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
          let send =  []
          let cancel = []
          if(action.delivery)
          {
            action.delivery.forEach(element => {
              if(element.Cancel)
              {
                cancel.push(element)
              }
              else{
                console.log(element)
                send.push(element)
              }
            });
          }
         
          return {
            availableDelivery: send,
            cancelDelivery : cancel
          };
        case SEARCH_DATA:
         
          return {
            availableDelivery: action.searchdelivery,
          };
        default:
          return state;
      }
};