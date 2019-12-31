import React, {useEffect, Fragment, useState} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from "react-redux";
import {getCartProduct, increaseCartProduct, reductionCartProduct, removeCartItem, closeCart} from "../Action/Cart";
import {getCookie} from "../Reducers/getCookie";
import {bookingProducts} from "../Action/Booking";

function Cart(){
    const dispatch = useDispatch();
    useEffect(()=>{
        const userCookie = "userCookie";
        const cookie = getCookie(userCookie);
        if(cookie.length === 0){
            document.cookie = 'userCookie= sangs';
        }
         dispatch(getCartProduct());
    },[])
    const cartProduct = useSelector(state => state.Cart.cartProduct);
    const token = useSelector(state =>state.SignIn.token);
   const clickIncrease = (id)=>{
         dispatch(increaseCartProduct(id));
    }
    const clickReduction =(id)=>{
        dispatch(reductionCartProduct(id));
    }
    const clickReomveCartItem = (id)=>{
        dispatch(removeCartItem(id));
    }
   const clickBooking =()=>{
        if(!token){
             alert("You have to login !!!!");
        }
        else{
            dispatch(bookingProducts())
        }
    }
    const totalPrice = (arr)=>{
         let result = cartProduct.reduce((cur, next)=>{
             return next.amount * next.productId.price
         },0);
         return result;
    }
    return(
        <Fragment>
            <div className="cart-box">
                <div className="cart">
                    {
                        cartProduct.length >0 ?(
                            cartProduct.map((item, index)=>{
                              return  <div className="cart__item" key={index}>
                                    <div className="cart__flex">
                                        <img src={item.productId.img} alt="sdfdf" />
                                        <div className="cart__item__info">
                                            <h3>{item.productId.name}</h3>
                                            <p>Price: ${item.productId.price}</p>
                                            <div className="cart__item__info__amount">
                                                <span className="cart__item__amount__text display-block">Số lượng:</span>
                                                <span onClick={()=>clickReduction(item.id)}>	&#45;</span>
                                                <span>{item.amount}</span>
                                                <span onClick={()=>clickIncrease(item.id)}>&#43;</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart__item__icon" onClick={()=>clickReomveCartItem(item.id)}>
                                        <FontAwesomeIcon icon={faTimes} className="cart__item__icon--icon" />
                                    </div>
                                </div>
                            })
                        ): <h2 className="nodetext">Bạn chưa có sản phẩm trong cart</h2>
                    }
                    <div className="cart__footer">
                        <p>Dự kiến nhận hàng: 3 ngày kể từ ngày đặt</p>
                        <h3 className="cart__price">
                            Số tiền: $<span>{totalPrice()}</span>
                        </h3>
                        <div className="cart__action">
                            <button className="cart__btn-secondary cart__btn" onClick={()=>dispatch(closeCart())}>Hủy</button>
                            <button className="cart__btn-primary cart__btn" onClick={()=>clickBooking()}>Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Cart;