import {bookingProductsSuccess, bookingProductsError} from "../Action/Booking";
import {Respue} from "../API/CallAPI";
import {fork, take, call, put, delay, takeLatest, select, takeEvery} from "redux-saga/effects";


// const request = await axios.post("/graphql",param,{
//     headers: {"Content-Type":"application/json",
//               "Authorization": token
//    }
// }
//    )
// ;
export function* watchCartToBooking(){
        const userCookie = yield select(state=> state.Cart.userCookie);
        const token = yield select(state=>state.SignIn.token);
        const repBooking ={
            query:`
                query{
                    CartToBooking(userCookie:"${userCookie}")
                }
            `
        };
        const res = yield call(Respue, repBooking, token);
        if(res.status ===200){
            yield put(bookingProductsSuccess(res.data))
        }
        else{
            yield put(bookingProductsError("ERROR"));
        }
}