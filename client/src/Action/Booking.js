import *as actionType from "./Type";

export const bookingProducts = payload =>({
    type: actionType.BOOKING_PRODUCTS,
    payload
})
export const bookingProductsSuccess = payload =>({
    type: actionType.BOOKING_PRODUCTS_SUCCESS,
    payload
})
export const bookingProductsError = payload =>({
    type: actionType.BOOKING_PRODUCTS_ERROR,
    payload
})