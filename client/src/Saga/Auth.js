import {fork, take, call, put, delay, takeLatest, select, takeEvery} from "redux-saga/effects";
import {SignUpSuccess, SignUpError, SignInSuccess, SignInError, getBookingSuccess, getBookingError, getUserSuccess, getUserError} from "../Action/Sign_in";
import {Respue} from "../API/CallAPI";
import axios from "axios";

export function* watchSignUp(){
      const userInput = yield select(state=> state.SignIn.user);
      const reqSignUp ={
          query:`
            mutation{
                signup(inputSignup:{userName:"${userInput.userName}", name:"${userInput.name}", password:"${userInput.password}"}){
                userName,
                name,
                userId,
                token,
                avatar,
                job,
                address,
                email
             }
            }
          `
      };
      const res = yield call(Respue, reqSignUp);
      if(res){
          const {data} = res.data;
          yield put(SignUpSuccess(data.signup))
      }
      else{
         yield put(SignUpError(res))
      }
}

export function* watchSignIn(){
    const login = yield select(state=> state.SignIn.user);
    const reqSignUp ={
        query:`
            query{
                Login(userName:"${login.userName}",password:"${login.password}"){
                userId,
                userName,
                token,
                name,
                avatar,
                job,
                address,
                email
                }
            }
        `
    };
    const res = yield call(Respue, reqSignUp);
    if(res){
        const {data} = res.data;
        yield put(SignInSuccess(data.Login))
    }
    else{
       yield put(SignInError(res))
    }
}

export function* watchBooking(){
    const token = yield select(state=> state.SignIn.token);
    const reqBooking ={
        query:`
            query{
                getBooking{
                    user{
                        id
                    },
                    productsId{
                        id,
                        img,
                        name,
                        price
                    },
                    amount,
                    dateBook,
                }
            }
        `
    }
    const res = yield call(Respue, reqBooking, token);
    if(res.status ===200){
        const {data} = res.data;
        yield put(getBookingSuccess(data.getBooking));
    }
    else{
        yield put(getBookingError(res));
    }
}

export function* watchGetUser(){
    const token = yield select(state => state.SignIn.token);
    const reqBodyUser={
        query:`
            query{
                getProfile{
                    userName,
                    name,
                    job,
                    email,
                    avatar,
                    address,
                    id
                }
            }
        `
    };
    const res = yield call(Respue, reqBodyUser, token);
    if(res.status ===200){
        const {data} = res.data;
        yield put(getUserSuccess(data.getProfile));
    }
    else{
        yield put(getUserError());
    }
}