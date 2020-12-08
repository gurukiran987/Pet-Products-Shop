import { act } from "react-dom/test-utils";
import { authConstants } from "../actions/constants"

const initState = {
    token: null,
    user: {
        firstName:'',
        lastName:'',
        email:'',
        picture:''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error:null,
    message:''

};

const authReducers = (state =initState,action) => {

    console.log(action);

    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state={
                ...state,
                authenticating: true
                
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state={
                ...state,
                user:action.payload.userinfo,
                token:action.payload.token,
                authenticate: true,
                authenticating: false     
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state={
                ...state,
                loading:true              
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state={
                ...initState              
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state={
                ...state,
                error:action.payload,
                loading:false             
            }
            break;
        case authConstants.REGISTER_SUCCESS:
            state={
                ...state,
                message:action.payload.message1,
                loading:false             
            }
            break;
        case authConstants.REGISTER_FAILURE:
            state={
                ...state,
                error:action.payload.error,
                loading:false             
            }
            break;
        case authConstants.REGISTER_REQUEST:
            state={
                ...state,
                loading:true            
            }
            break;
    }
    return state;
}

export default authReducers;