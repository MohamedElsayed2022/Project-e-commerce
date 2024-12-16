import {  CREATE_USER, FORGET_PASSWORD, GET_CURRENT_USER, LOGIN_USER, RESET_PASSWORD, UPDATE_USER_DATA, UPDATE_USER_PASSWORD, VERIFY_RESET_PASSWORD } from "../type"
import { useInsertData } from "../../hooks/useInsertData"
import {useGetData }from "../../hooks/useGetData"
import { useUpdateData } from "../../hooks/useUpdateData"

//create new user
export const createNewUser =(data)=> async(dispatch)=>{
    try{
      const response = await useInsertData(`/api/v1/auth/signup` , data )
      console.log(response.data)

      dispatch( {
       type : CREATE_USER,
       payload : response ,
       loading : true
      })
    }catch(e){
       dispatch( {
           type : CREATE_USER ,
           payload : e.response 
          })
    }
}

//Login user
export const loginUser =(data)=> async(dispatch)=>{
  try{
    const response = await useInsertData(`/api/v1/auth/login` , data )
    console.log(response.data)
    dispatch( {
     type : LOGIN_USER,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : LOGIN_USER ,
         payload : e.response 
        })
  }
}

//Login user
export const getLoggedUser =()=> async(dispatch)=>{
  try{
    const response = await useGetData(`/api/v1/users/getMe`)
    console.log(response.data)
    dispatch( {
     type : GET_CURRENT_USER,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : GET_CURRENT_USER ,
         payload : e.response 
        })
  }
}

//forget password 
export const forgetPassword =(data)=> async(dispatch)=>{
  try{
    const response = await useInsertData(`/api/v1/auth/forgotPasswords` , data )
    console.log(response.data)
    dispatch( {
     type : FORGET_PASSWORD,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : FORGET_PASSWORD ,
         payload : e.response 
        })
  }
}

//forget password 
export const verifyResetPassword =(data)=> async(dispatch)=>{
  try{
    const response = await useInsertData(`/api/v1/auth/verifyResetCode` , data )
    dispatch( {
     type : VERIFY_RESET_PASSWORD,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : VERIFY_RESET_PASSWORD ,
         payload : e.response 
        })
  }
}


//reset password 
export const resetPassword = (data) => async (dispatch) => {
  try {
      const response = await useUpdateData(`/api/v1/auth/resetPassword`, data);
      dispatch({
          type: RESET_PASSWORD,
          payload: response,
          loading: true
      })

  } catch (e) {
      dispatch({
          type: RESET_PASSWORD,
          payload: e.response,
      })
  }
}

// update user data
export const updateUserData =(body)=> async(dispatch)=>{
  try{
      const response = await useUpdateData(`/api/v1/users/updateMe` , body)
      dispatch( {
       type : UPDATE_USER_DATA ,
       payload : response 
      })
    }catch(e){
       dispatch( {
           type : UPDATE_USER_DATA ,
           payload : e.response
          })
    }
   }

   // update user password
export const updateUserPassword =(body)=> async(dispatch)=>{
  try{
      const response = await useUpdateData(`/api/v1/users/changeMyPassword` , body)
      dispatch( {
       type : UPDATE_USER_PASSWORD ,
       payload : response 
      })
    }catch(e){
       dispatch( {
           type : UPDATE_USER_PASSWORD ,
           payload : e.response
          })
    }
   }