
import * as actionType from "./Type";

export const fetchTrend =payload=>({
    type: actionType.FETCH_TREND,
    payload
})
export const fetchTrendSuccess =payload=>({
    type: actionType.FETCH_TREND_SUCCESS,
    payload
})
export const fetchTrendError =payload=>({
    type: actionType.FETCH_TREND_ERROR,
    payload
})

export const fetchPopularProductSuccess = payload=>({
       type: actionType.FETCH_POPULAR_PRODUCT_SUCCESS,
       payload
})
export const fetchPopularProductError = payload=>({
    type: actionType.FETCH_POPULAR_PRODUCT_ERROR,
    payload
});
export const fetchProductMenHome = payload=>({
    type: actionType.FETCH_PRODUCT_MEN_HOME,
    payload
});
export const fetchProductWomenHome = payload=>({
    type: actionType.FETCH_PRODUCT_WOMEN_HOME,
    payload
});
export const fetchProductHomeError = payload=>({
    type: actionType.FETCH_PRODUCT_HOME_ERROR,
    payload
})

export const test =payload=>({
    type: actionType.TEST,
    payload
})