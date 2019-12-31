import *as actionType from "./Type";

export const openCart =()=>({
     type: actionType.OPEN_CART
})
export const closeCart =()=>({
    type: actionType.CLOSE_CART
});

export const addToCart=(payload)=>({
    type: actionType.ADD_TO_CART,
    payload
})
export const addToCartSuccess=(payload)=>({
    type: actionType.ADD_TO_CART_SUCCESS,
    payload
})
export const addToCartError=(payload)=>({
    type: actionType.ADD_TO_CART_ERROR,
    payload
})
export const getCartProduct = ()=>({
    type: actionType.GET_CART_PRODUCT
});
export const getCartProductSuccess = (payload)=>({
    type: actionType.GET_CART_PRODUCT_SUCCESS,
    payload
});
export const getCartProductError = (payload)=>({
    type: actionType.GET_CART_PRODUCT_ERROR,
    payload
});
export const increaseCartProduct =(payload)=>({
     type: actionType.INCREASE_CART_PRODUCT,
     payload
});
export const increaseCartProductSuccess =(payload)=>({
    type: actionType.INCREASE_CART_PRODUCT_SUCCESS,
    payload
});
export const increaseCartProductError =(payload)=>({
    type: actionType.INCREASE_CART_PRODUCT_ERROR,
    payload
});
export const reductionCartProduct =(payload)=>({
    type: actionType.REDUCTION_CART_PRODUCT,
    payload
});
export const reductionCartProductSuccess =(payload)=>({
    type: actionType.REDUCTION_CART_PRODUCT_SUCCESS,
    payload
});
export const reductionCartProductError =(payload)=>({
    type: actionType.REDUCTION_CART_PRODUCT_ERROR,
    payload
});
export const removeCartItem = payload=>({
    type: actionType.REMOVE_CART_ITEM,
    payload
})