export const SET_DATA = 'SET_DATA';
export const SEARCH_DATA = 'SEARCH_DATA';





export const fetchProducts =  () => {
    return async (dispatch, getState) => {
      // any async code you want!
      const userId  =  await getState().auth.userId;
        

      try {
      
        const response = await fetch(
          `https://evol.az/api/auth/products`
        );
  
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const resData = await response.json();
       
        dispatch({
          type: SET_DATA,
          product: resData.Products,
        });
      } catch (err) {
          console.log(err)
        throw err;
      }
    };
  };

  export const SearchProducts =  (value) => {
    return async (dispatch , getState) => {
      // any async code you want!

  
        const data = getState().product.availableProducts
        const result = data.filter(product => product.ItemName.toLowerCase().includes(value.toLowerCase()));


      try {
  
        dispatch({
          type: SEARCH_DATA,
          searchproduct: result,
        });
      } catch (err) {
        throw err;
      }
    };
  };