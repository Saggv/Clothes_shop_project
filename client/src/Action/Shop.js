import *as actionType from "./Type";

export const fetchSlide=()=>({
    type: actionType.FETCH_SLIDE_IMG
})
export const fetchSlideSuccess=payload=>({
    type: actionType.FETCH_SLIDE_IMG_SUCCESS,
    payload
})
export const fetchSlideError=payload=>({
    type: actionType.FETCH_SLIDE_IMG,
    payload
})

export const fetchProductMenSuccess = payload=>({
     type: actionType.FETCH_PRODUCT_MAN_SUCCESS,
     payload
});
export const fetchProductMenError = payload=>({
    type: actionType.FETCH_PRODUCT_MAN_ERROR,
    payload
});
export const fetchWomenProduct =()=>({
     type: actionType.FETCH_PRODUCT_WOMEN
})
export const fetchProductWomenSuccess = payload=>({
     type: actionType.FETCH_PRODUCT_WOMEN_SUCCESS,
     payload
})
export const fetchProductWomenError = payload=>({
    type: actionType.FETCH_PRODUCT_WOMEN_ERROR,
    payload
})
export const getProductId = payload=>({
    type: actionType.GET_PRODUCT_ID,
    payload
})

export const fetchProductDetail =()=>({
    type: actionType.FETCH_PRODUCT_DETAIL
})
export const fetchProductDetailSuccess = payload =>({
    type: actionType.FETCH_PRODUCT_DETAIL_SUCCESS,
    payload
})
export const fetchProductDetailError =payload=>({
    type: actionType.FETCH_PRODUCT_DETAIL_ERROR,
    payload
})
export const fetchVewMoreSuccess =(payload)=>({
    type: actionType.FETCH_PRODUCT_DETAIL_VIEW_MORE_SUCCESS,
    payload
});
export const fetchVewMoreSuccessWomen =(payload)=>({
    type: actionType.FETCH_PRODUCT_DETAIL_VIEW_MORE_SUCCESS_WOMEN,
    payload
});
export const fetchVewMoreError =(payload)=>({
    type: actionType.FETCH_PRODUCT_DETAIL_VIEW_MORE_ERROR,
    payload
})
