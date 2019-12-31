import *as actionType from "../Action/Type";
import {getCookie} from "./getCookie";
const initialState ={
     isOpen: false,
     userCookie:{},
     idProduct:{},
     cartProduct: [],
     cartIdRemove:{}
}
const Cart =(state= initialState, action)=>{
    switch(action.type){
        case actionType.OPEN_CART:
            return{
                ...state,
                isOpen: !state.isOpen
        }
        case actionType.CLOSE_CART:
            return{
                ...state,
                isOpen:false
        }
        case actionType.ADD_TO_CART:
            const userCookie ="userCookie"
            let cookie =getCookie(userCookie);
            return{
                ...state,
                userCookie: cookie,
                idProduct: action.payload
        }
        case actionType.ADD_TO_CART_SUCCESS:
            const data =[...state.cartProduct];
            data.push(action.payload);
            return{
                ...state,
                cartProduct: data
        }
        case actionType.GET_CART_PRODUCT:
            const cookiesss = "userCookie";
            let coos = getCookie(cookiesss);
            return{
                ...state,
                userCookie: coos
            }
        case actionType.GET_CART_PRODUCT_SUCCESS:
            return{
                ...state,
                cartProduct: action.payload
        }
        case actionType.INCREASE_CART_PRODUCT:
            const incares = state.cartProduct.map((item, index)=>{
                   if(item.id === action.payload){
                       item.amount= item.amount+1;
                       return item;
                   }
                   return item;
            })
            return{
                ...state,
                cartProduct:incares,
                idProduct: action.payload
        }
        case actionType.REDUCTION_CART_PRODUCT:
            const reductioncart = state.cartProduct.map((item, index)=>{
                   if(item.id === action.payload){
                       item.amount= item.amount-1;
                       return item;
                   }
                   return item;
            })
            const filterCart = reductioncart.filter( item=>{
                  if(item.id===action.payload){
                      if(item.amount <=0){
                          return item.id !== action.payload
                      }
                  }
                  return item;
            })
            return{
                ...state,
                cartProduct:filterCart,
                idProduct: action.payload
        }
        case actionType.REMOVE_CART_ITEM:
            return{
                ...state,
                cartProduct: state.cartProduct.filter(item=>item.id !== action.payload),
                cartIdRemove: action.payload
            }
        case actionType.BOOKING_PRODUCTS:
            return{
                ...state,
                isOpen:false,
                cartProduct:[]
            }
        default:
            return state
    
     }
}

export default Cart;