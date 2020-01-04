import React, {useEffect} from 'react';
import logo from "../Images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHatCowboy, faEye, faFemale, faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";
import Cart from "./Cart";
import {useSelector, useDispatch} from "react-redux";
import {openCart} from "../Action/Cart";
import {openSignin, getUser, lognOut} from "../Action/Sign_in";
import Signup from './Signup';

import userImg from "../Images/trend1.jpg";

function Navigation(){
        const dispatch = useDispatch();
        const isOpenCart = useSelector(state=>state.Cart.isOpen);
        const isOpenSignIn = useSelector(state =>state.SignIn.isOpen);
        const isLogin = useSelector(state => state.SignIn.token);
        const token = useSelector(state =>state.SignIn.token);
        const user = useSelector(state =>state.SignIn.user);
        const cartProduct = useSelector(state => state.Cart.cartProduct);
        const BookingData = useSelector(state =>state.SignIn.booking);
         useEffect(()=>{
              if(token){
                   dispatch(getUser())
              }
         },[])
         return(
              <nav className="nav">
                  <div className="container">
                    <div className="nav__logo">
                        <NavLink to="/">
                            <img src={logo} alt="logo clothes shop" />
                        </NavLink>
                    </div>
                    <ul className="nav__list">
                            {/* <li className="nav__list__items">
                                <FontAwesomeIcon icon={faSearch} className="nav__list__icon" />
                            </li> */}
                            <li className="nav__list__items">
                                <NavLink to="/show"><FontAwesomeIcon icon={faEye} className="icon" /></NavLink>
                                <NavLink className="nav__list__link" to="/show">Show</NavLink>
                            </li>
                            <li className="nav__list__items">
                                <NavLink to="/manshop"><FontAwesomeIcon icon={faHatCowboy} className="icon" /></NavLink>
                                <NavLink className="nav__list__link" to="/manshop">Man</NavLink>
                            </li>
                            <li className="nav__list__items">
                                <NavLink to="/wonmenshop"><FontAwesomeIcon icon={faFemale} className="icon" /></NavLink>
                                <NavLink className="nav__list__link" to="/womenshop">Woman</NavLink>
                            </li>
                            <li className="nav__list__items relative" onClick ={()=>dispatch(openCart())}>
                                <span className="notification">{cartProduct.length}</span>
                                <FontAwesomeIcon icon={faShoppingCart} className="nav__list__icon" />
                            </li>
                            <li className="nav__list__items relative">
                                <span className="notificationss">{BookingData.length}</span>
                                {
                                    isLogin  ? (
                                        <NavLink to="/aboutme">
                                          <img className="nav__user__img" src={user.avatar} alt="vafddsf" />
                                         </NavLink>
                                    ): (
                                        <div className="nav__user">
                                        <FontAwesomeIcon icon={faUser} className="nav__list__icon-user" />
                                    </div>
                                    )
                                }
                                <div className="nav__user__action">
                                    <FontAwesomeIcon icon={faSignInAlt} onClick={()=>dispatch(openSignin())} className="nav__user__action__icon" />
                                    <FontAwesomeIcon icon={faSignOutAlt} onClick={()=>dispatch(lognOut())} className="nav__user__action__icon" />
                                </div>
                            </li>
                    </ul>
                  </div>
                    {
                        isOpenCart ? <Cart></Cart> : null
                    }
                    {
                        isOpenSignIn ? <Signup></Signup> :null
                    }
              </nav>
         )
}

export default Navigation;