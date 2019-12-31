import React, {useEffect, useState, Fragment} from "react";
import user from "../Images/trend1.jpg";
import Profileitem from "../Component/Profile_item";
import {getBooking} from "../Action/Sign_in";
import {Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
function Profile(){
    const dispatch = useDispatch();
    const token = useSelector(state =>state.SignIn.token);
    const booking = useSelector(state =>state.SignIn.booking);
    useEffect(()=>{
        if(token){
            dispatch(getBooking())
        }
    },[]);
    const userInfo = useSelector(state =>state.SignIn.user);
    if(!token){
        return <Redirect exact from="/aboutme" to="/" />
    }
    return(
        <Fragment>
            <div className="profile">
                <div className="container">
                    <div className="profile__flex">
                        <div className="profile__user">
                            <div className="profile__user__info">
                                <img src={token ? (userInfo.avatar) : user} alt="sdfdf" />
                                <div className="profile__user__info--ac">
                                    <p>{token ? userInfo.name:"Kadsfn Aniata"}</p>
                                    <p> {token ? userInfo.email:"sangvivi25@gmail.com"}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="profile__user__detail mt-3">
                                <p>Địa chỉ:</p>
                                <textarea  value={token ? userInfo.address: "Ha Noi"}></textarea>
                            </div>
                            <div className="profile__user__detail">
                                <p>Nơi làm việc:</p>
                                <textarea  value="Hà Nội"></textarea>
                            </div>
                            <div className="profile__user__detail">
                                <p>Công việc:</p>
                                <textarea  value={token ? userInfo.job: "sfsafdsds"}></textarea>
                            </div>
                        </div>
                        <div className="profile__content">
                            <ul className="profile__filter">
                                <li className="profile__filter__items">Tất cả</li>
                                <li className="profile__filter__items">Đang giao</li>
                                <li className="profile__filter__items">Đã giao</li>
                                <li className="profile__filter__items">Đã hủy</li>
                                <li className="profile__filter__items">Sẽ hủy</li>
                            </ul>
                            <Profileitem bookingData = {booking}></Profileitem>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Profile;