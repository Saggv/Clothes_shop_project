
import {fork, take, call, put, delay, takeLatest, select, takeEvery} from "redux-saga/effects";
import {fetchTrendSuccess, fetchTrendError,
     fetchPopularProductError, fetchPopularProductSuccess, fetchProductMenHome,
     fetchProductHomeError, fetchProductWomenHome} from "../Action/Trend";
import {fetchShow, fetchShowSuccess, fetchShowError} from "../Action/Show";
import {Respue, reqBody, reqBodyProduct, reqBodyMenHome, 
    reqBodyWomenHome, reqBodyShowImg, reqSlideImg,reqProductMen,
    reqViewMoreProductMen,reqProductWomen,reqViewMoreProductWomen
} from "../API/CallAPI";
import {fetchSlide, fetchSlideSuccess, fetchSlideError,
        fetchProductMenSuccess, fetchProductMenError,
        fetchProductDetailSuccess, fetchProductDetailError,
        fetchVewMoreSuccess,fetchVewMoreError,fetchProductWomenSuccess,fetchProductWomenError,
        fetchVewMoreSuccessWomen
} from "../Action/Shop";
import * as actionType from "../Action/Type";

import {watchAddToCart, watchCart, watchIncreaseCart, watchReductionCart,watchDeleteCartItem} from "./Cart";
import {watchSignUp,watchSignIn, watchBooking, watchGetUser} from "./Auth";
import {watchCartToBooking} from "./Booking";

function* FetchTrend(){
            const res =  yield call(Respue, reqBody);
            if(res.status == 200){
                const {data} = res.data;
                yield put(fetchTrendSuccess(data.TrendWeekImg));
            }else{
                yield put(fetchTrendError(res))
            }
}

function* popularProduct(){
     const res = yield call(Respue, reqBodyProduct);
     if(res.status ===200){
         const {data} = res.data;
         yield put(fetchPopularProductSuccess(data.PopularProduct));
     }
     else{
         yield put(fetchPopularProductError());
     }
}

function* MenProduct(){
    const res = yield call(Respue, reqBodyMenHome);
    if(res.status ===200){
        const {data} = res.data;
        yield put(fetchProductMenHome(data.MenShopHome));
    }
    else{
        yield put(fetchProductHomeError());
    }
}
function* WomenProduct(){
    const res = yield call(Respue, reqBodyWomenHome);
    if(res.status ===200){
        const {data} = res.data;
        yield put(fetchProductWomenHome(data.WomenShopHome));
    }
    else{
        yield put(fetchProductHomeError());
    }
}

function* watchFetchTrend(){
    yield take(actionType.FETCH_TREND);
     yield fork(FetchTrend);
     yield fork(popularProduct)
     yield fork(MenProduct);
     yield fork(WomenProduct)
}

function* watchShowImg(){
    const res = yield call(Respue, reqBodyShowImg);
    if(res.status ===200){
        const {data}=res.data;
        yield put(fetchShowSuccess(data.ShowImg))
    }else{
        yield put(fetchShowError())
    }
}
function* fetchSlideShop(){
    const res = yield call(Respue, reqSlideImg );
    if(res.status === 200){
        const {data} =res.data;
        yield put(fetchSlideSuccess(data.SlideImg));
    }else{
       yield put(fetchSlideError());
    }
}
function* fetchProductShopMen(){
    const res = yield call(Respue, reqProductMen);
    if(res.status === 200){
        const {data} =res.data;
        yield put(fetchProductMenSuccess(data.MenProduct));
    }else{
       yield put(fetchProductMenError());
    }
}
function* fetchProductShopWomen(){
    const res = yield call(Respue, reqProductWomen);
    if(res.status ===200){
        const {data}=res.data;
        yield put(fetchProductWomenSuccess(data.WomenProduct))
    }
    else{
        yield put(fetchProductWomenError(res));
    }
}
function* watchFetchShopMen(){
    yield fork(fetchSlideShop);
    yield fork(fetchProductShopMen);
}
function* fetchProductDetails(){
    const idProduct = yield select(state=>state.Shop.idProduct);
    const reqProductDetail={
        query:`
            query{
                ProductDetail(idProduct:"${idProduct}"){
                    id,
                    name,
                    price,
                    img,
                    cag,
                    forMen
            }
        }
            `
    }
    const res = yield call(Respue, reqProductDetail);
    if(res.status === 200){
        const {data} =res.data;
        yield put(fetchProductDetailSuccess(data.ProductDetail));
    }else{
       yield put(fetchProductDetailError(res));
    }
}
function* fetchViewMoreProductMen(){
    const res = yield call(Respue, reqViewMoreProductMen);
    if(res.status === 200){
        const {data} =res.data;
        yield put(fetchVewMoreSuccess(data.ViewMoreProductMen));
    }else{
       yield put(fetchVewMoreError(res));
    }
};
function* fetchViewMoreProductWomen(){
    const res = yield call(Respue, reqViewMoreProductWomen);
    if(res.status === 200){
        const {data} =res.data;
        yield put(fetchVewMoreSuccessWomen(data.ViewMoreProductWomen));
    }else{
       yield put(fetchVewMoreError(res));
    }
}
function* watchFetchWomenShop(){
     yield fork(fetchSlideShop);
     yield fork(fetchProductShopWomen)

}
function* watchFetchProductDetail(){
        yield fork(fetchProductDetails);
        yield fork(fetchViewMoreProductMen);
        yield fork(fetchViewMoreProductWomen);
}
function* rootSaga(){
    yield fork(watchFetchTrend);
    yield takeLatest(actionType.FETCH_SHOW_IMG, watchShowImg);
    yield takeEvery(actionType.FETCH_SLIDE_IMG, watchFetchShopMen);
    yield takeEvery(actionType.FETCH_PRODUCT_WOMEN, watchFetchWomenShop);
    yield takeLatest(actionType.FETCH_PRODUCT_DETAIL, watchFetchProductDetail);
    yield takeLatest(actionType.ADD_TO_CART, watchAddToCart);
    yield takeLatest(actionType.GET_CART_PRODUCT, watchCart);
    yield takeLatest(actionType.SIGN_UP, watchSignUp);
    yield takeLatest(actionType.SIGN_IN, watchSignIn);
    yield takeLatest(actionType.GET_BOOKING, watchBooking);
    yield takeLatest(actionType.BOOKING_PRODUCTS, watchCartToBooking);
    yield takeLatest(actionType.INCREASE_CART_PRODUCT, watchIncreaseCart);
    yield takeLatest(actionType.REDUCTION_CART_PRODUCT, watchReductionCart);
    yield takeLatest(actionType.REMOVE_CART_ITEM, watchDeleteCartItem);
    yield takeLatest(actionType.GET_USER, watchGetUser);
}

export default rootSaga;