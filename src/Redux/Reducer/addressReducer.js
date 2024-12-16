import { CREATE_ADDRESS, CREATE_BRAND, DELETE_ADDRESS, GET_ALL_ADDRESSES, GET_ALL_BRANDS, GET_ERROR, GET_ONE_ADDRESS, GET_ONE_BRAND, UPDATE_ADDRESS } from "../type"

const inital = {
    addAddress:[],
    allAddresses : [],
    deletedAddress : [],
    oneAddress : [],
    editedAddress : [],
    loading : true,

}
const addressReducer = (state = inital , action)=>{
    switch(action.type){
        
            case CREATE_ADDRESS:
                    return {
                        addAddress : action.payload ,
                        loading : false
                    }
                    case GET_ALL_ADDRESSES:
                        return {
                            allAddresses : action.payload ,
                            loading : false
                        }
                        case DELETE_ADDRESS:
                            return {
                                deletedAddress : action.payload ,
                                loading : false
                            }
                            case GET_ONE_ADDRESS:
                            return {
                                oneAddress : action.payload ,
                                loading : false
                            }
                            case UPDATE_ADDRESS:
                            return {
                                editedAddress : action.payload ,
                                loading : false
                            }
          
            default :
            return state
    }
}

export default addressReducer