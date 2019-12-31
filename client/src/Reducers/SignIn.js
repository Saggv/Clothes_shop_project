import * as actionType from "../Action/Type";

const initialState = {
    isOpen: false,
    isSignIn: true,
    user:{},
    error:{},
    token:localStorage.getItem('token'),
    booking: []
}

const SignIn =(state =initialState, action)=>{
     switch(action.type){
         case actionType.OPEN_SIGN_IN:
             return{
                 ...state,
                 isOpen: !state.isOpen
             }
        case actionType.CLOSE_SIGN_IN:
            return{
                ...state,
                isOpen: false
            }
        case actionType.IS_SIGN_IN:
            return{
                ...state,
                isSignIn: !state.isSignIn
            }
        case actionType.SIGN_UP:
            return{
                ...state,
                user: action.payload
            }
        case actionType.SIGN_IN:
            return{
                ...state,
                user: action.payload
            }
        case actionType.SIGN_UP_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                user: action.payload,
                token: action.payload.token,
                isOpen: false
            }
        case actionType.LOGN_OUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null
            }
        case actionType.SIGN_UP_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case actionType.SIGN_IN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                user: action.payload,
                token: action.payload.token,
                isOpen: false
            }
        case actionType.SIGN_IN_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case actionType.GET_BOOKING_SUCCESS:
            return{
                ...state,
                booking: action.payload
            }
        case actionType.GET_BOOKING_SUCCESS:
            return{
                ...state,
                error: action.payload
            }
        case actionType.GET_USER_SUCCESS:
            return{
                ...state,
                user: action.payload,
            }
        case actionType.GET_USER_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
     }
}

export default SignIn;