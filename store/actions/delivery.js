export const SET_DATA = 'SET_DATA';
export const SEARCH_DATA = 'SEARCH_DATA';

import delivery from '../../models/delivery'



export const fetchDelivery =  () => {
    return async (dispatch, getState) => {
      // any async code you want!
      const userId  =  await getState().auth.userId;
        
      //console.log(getState().auth,9999999)

      //console.log(userId,2)
      try {
        const response = await fetch(
          `https://evolbiznes.az/api/getuserorder?userId=${userId}`
        );
  
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const resData = await response.json();
        console.log('ferhorder')
        dispatch({
          type: SET_DATA,
          delivery: resData.Orders,
        });
      } catch (err) {
        throw err;
      }
    };
  };

  export const SearchDelivery =  (value) => {
    return async (dispatch , getState) => {
      // any async code you want!

        const data = getState().delivery.availableDelivery
        const result = data.filter(order => order.ClientName.toLowerCase().includes(value.toLowerCase()));


      try {
  
        dispatch({
          type: SEARCH_DATA,
          searchdelivery: result,
        });
      } catch (err) {
        throw err;
      }
    };
  };

