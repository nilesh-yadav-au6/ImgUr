import { USER_CREATE, USER_LOGIN ,USER_LOGOUT } from "../actionTypes"
import Axios from "axios"

export const userCreate = (user) => async dispatch => {
   try{ 
        
        const {data} = await Axios.post('https://imgurnilesh.herokuapp.com/user/register', {...user})
        dispatch({type:USER_CREATE , payload:data.user})

   }catch(err){
       console.log(err)
   }
}

export const loginUser = (user) => async (dispatch) => {
    console.log(user)
    try{
        const { data } = await Axios.post(
            `https://imgurnilesh.herokuapp.com/login`,{...user}
        )
        console.log(data)
        dispatch({ type:USER_LOGIN, payload: data })
    }catch(err){
        console.error(err);
    }
}

export const logoutUser = (token) => async (dispatch) => {
    try{
        console.log(token)
        const  data  = await Axios(
            `https://imgurnilesh.herokuapp.com/logout`,{
                headers: {
                    'Authorization': token
                  }
            }
        )
        console.log(data)
        dispatch({ type:USER_LOGOUT})
    }catch(err){
        console.error(err);
    }
}
