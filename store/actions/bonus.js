export const SET_DATA = 'SET_DATA';


export const fetchBonus =  () => {
    return async (dispatch, getState) => {
      console.log('fetchbonus')
      const UserFin  =  await getState().auth.UserFin;
        
      //console.log(getState().auth,9999999)

      //console.log(userId,2)
      try {
        const response = await fetch(
          `https://evolbiznes.az/api/getuserbonus?UserFin=${UserFin}`
        );
  
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const resData = await response.json();

        dispatch({
          type: SET_DATA,
          bonus: resData.response,
        });
      } catch (err) {
        throw err;
      }
    };
  };

