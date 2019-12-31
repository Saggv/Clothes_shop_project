import *as actionType from "./Type";

export const openSignin = payload=>({
     type: actionType.OPEN_SIGN_IN,
     payload
})

export const lognOut =() =>({
    type: actionType.LOGN_OUT
})
export const closeSignin = payload=>({
    type: actionType.CLOSE_SIGN_IN,
    payload
})

export const isSignInClick = payload=>({
    type: actionType.IS_SIGN_IN,
    payload
})

export const SignUpClick = payload=>({
    type:actionType.SIGN_UP,
    payload
})
export const SignUpSuccess = payload=>({
    type:actionType.SIGN_UP_SUCCESS,
    payload
})
export const SignUpError = payload=>({
    type:actionType.SIGN_UP_ERROR,
    payload
})
export const SignInClick = payload=>({
    type:actionType.SIGN_IN,
    payload
})
export const SignInSuccess = payload=>({
    type:actionType.SIGN_IN_SUCCESS,
    payload
})
export const SignInError = payload=>({
    type:actionType.SIGN_IN_ERROR,
    payload
})

export const getBooking = payload=>({
    type: actionType.GET_BOOKING,
    payload
})
export const getBookingSuccess = payload=>({
    type: actionType.GET_BOOKING_SUCCESS,
    payload
})
export const getBookingError = payload=>({
    type: actionType.GET_BOOKING_ERROR,
    payload
})

export const getUser = payload=>({
    type: actionType.GET_USER,
    payload
});
export const getUserSuccess = payload=>({
    type: actionType.GET_USER_SUCCESS,
    payload
});
export const getUserError = payload=>({
    type: actionType.GET_USER_ERROR,
    payload
});