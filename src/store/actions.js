
export const DECREASE = "DECREASE"
export const INCREASE = "INCREASE"
export const RESET = "RESET"

//modal Actions
export const MODAL_OPEN ="MODAL_OPEN"
export const MODAL_CLOSE ="MODAL_CLOSE"



//product Actions
export const SET_LOADING="SET_LOADING"
export const GET__USERS= "GET__USERS"


//action creators
export const decrease = () => ({ type: DECREASE })
export const increase = () =>({type:INCREASE})
export const reset = () => ({ type: RESET })
export const openModal = (isOpen,name, text) => (
    {
        type: MODAL_OPEN,
        payload: {
            isOpen,
            name,
            text
        }
    }
)

export const closeModal = (isOpen,name, text) => (
    {
        type: MODAL_CLOSE,
         payload: {
            isOpen,
            name,
            text
        }
    }
)


export const setLoading = () => ({ type: SET_LOADING })


export const getUsers = () => async (dispatch) =>
{
    dispatch(setLoading())
    const url='https://jsonplaceholder.typicode.com/users'
    const response = await fetch(url)  
    const data = await response.json()
    dispatch({ type:GET__USERS, payload:data})
}

// export const getUsers = () => {
//   return async function(dispatch) {
//       dispatch(setLoading());
//       const url ="https://jsonplaceholder.typicode.com/users"
//     const response = await fetch(url);
//     const data = await response.json();
//     dispatch({ type: GET__USERS, payload: data });
//   };
// };