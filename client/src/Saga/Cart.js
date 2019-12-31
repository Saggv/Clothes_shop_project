import *as actionType from "../Action/Type";
import {addToCartSuccess, addToCartError, getCartProductError, getCartProductSuccess,
    reductionCartProductError, increaseCartProductSuccess, reductionCartProductSuccess} from "../Action/Cart";
import {fork, take, call, put, delay, takeLatest, select, takeEvery} from "redux-saga/effects";
import {Respue} from "../API/CallAPI";

export function* watchAddToCart(){
    const id = yield select(state => state.Cart.idProduct);
    const userCookie = yield select(state => state.Cart.userCookie);
    const reqAddToCart={
        query:`
            mutation{
                AddToCart(inputCart:{userCookie:"${userCookie}", productId:"${id}"}){
                id,
                userCookie,
                productId{
                    id,
                    name,
                    img,
                    cag,
                    forMen,
                    price
                },
                amount
                }
            }
        `
    };
    const res = yield call(Respue, reqAddToCart);
    if(res.status ===200){
        const {data} = res.data;
        yield put(addToCartSuccess(data.AddToCart));
    }
    else{
        yield put(addToCartError());
    }
}

export function* watchCart(){
    const userCookie = yield select(state => state.Cart.userCookie);
    const reqAddToCart={
        query:`
            query{
                Cart(userCookie:"${userCookie}"){
                id,
                productId {
                    id,
                    img,
                    name,
                    cag,
                    forMen,
                    price
                },
                userCookie,
                amount
            }
            }
        `
    };
    const res = yield call(Respue, reqAddToCart);
    if(res.status ===200){
        const {data} = res.data;
        yield put(getCartProductSuccess(data.Cart));
    }
    else{
        yield put(getCartProductError(res));
    }
}

export function* watchIncreaseCart(){
       const idCartItem = yield select(state =>state.Cart.idProduct);
       const userCookie = yield select(state=>state.Cart.userCookie);
      const reqIncrease ={
          query:`
            query{
                IncreaseCart(productIds:"${idCartItem}", userCookies:"${userCookie}"){
                id,
                amount
                }
            }
          `
      };
      const res = yield call(Respue, reqIncrease);
      if(res.status ===200){
          yield put(increaseCartProductSuccess("success"))
      }
      else{
          yield put(increaseCartProductSuccess("ERRR"))
      }
}

export function* watchReductionCart(){
    const idCartItem = yield select(state =>state.Cart.idProduct);
    const userCookie = yield select(state=>state.Cart.userCookie);
   const reqIncrease ={
       query:`
        query{
            ReductionCart(productIdss:"${idCartItem}", userCookiess:"${userCookie}"){
            id,
            amount
            }
        }
       `
   };
   const res = yield call(Respue, reqIncrease);
   if(res.status ===200){
       yield put(reductionCartProductSuccess("success"))
   }
   else{
       yield put(reductionCartProductError("errr"))
   }
};

export function* watchDeleteCartItem(){
    const id = yield select(state =>state.Cart.cartIdRemove);
    const userCookie = yield select(state=>state.Cart.userCookie);
    const reqRemoveCart = {
        query:`
            query{
                RemoveCartItem(cartId:"${id}", userCookies:"${userCookie}")
            }
        `
    }
    const res = yield call(Respue, reqRemoveCart);
    console.log(res);
}