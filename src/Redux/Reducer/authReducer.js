import {  CREATE_USER, FORGET_PASSWORD, GET_CURRENT_USER, GET_ERROR, LOGIN_USER, RESET_PASSWORD, UPDATE_USER_DATA, UPDATE_USER_PASSWORD, VERIFY_RESET_PASSWORD } from "../type"

const inital = {
    user:[],
    loginUser :[],
    currentUser : [],
    forgetPassword : [],
    verifyResetPassword : [],
    resetPassword : [],
    userProfile : [],
    newPassword :[],
    loading : true,

}
const authReducer = (state = inital , action)=>{
    switch(action.type){
            case CREATE_USER:
                    return {
                        user : action.payload ,
                        loading : false
                    }
                    case LOGIN_USER:
                    return {
                        loginUser : action.payload ,
                        loading : false
                    }
                    case GET_CURRENT_USER:
                        return {
                            ...state,
                            currentUser : action.payload ,
                            loading : false
                        }
                        case FORGET_PASSWORD:
                        return {
                            ...state,
                            forgetPassword : action.payload ,
                            loading : false
                        }
                        case VERIFY_RESET_PASSWORD:
                        return {
                            ...state,
                            verifyResetPassword : action.payload ,
                            loading : false
                        }
                        case RESET_PASSWORD:
                            return {
                                ...state,
                                resetPassword : action.payload ,
                                loading : false
                            }
                            case UPDATE_USER_DATA:
                                return {
                                    ...state,
                                    userProfile : action.payload ,
                                    loading : false
                                }
                                case UPDATE_USER_PASSWORD:
                                return {
                                    ...state,
                                    newPassword : action.payload ,
                                    loading : false
                                }

                            //userProfile
            case GET_ERROR :
                return {...state , user : action.payload , loading : true}
                
            default :
            return state
    }
}

export default authReducer