import React, {useEffect, useState,useRef, Fragment} from "react";
import user from "../Images/trend1.jpg";
import Profileitem from "../Component/Profile_item";
import {getBooking} from "../Action/Sign_in";
import {Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {getUser} from "../Action/Sign_in";
function Profile(){
    const dispatch = useDispatch();
    const token = useSelector(state =>state.SignIn.token);
    const booking = useSelector(state =>state.SignIn.booking);
    const [selectedFile, setSelectedFile] = useState(null);
    const filterFile = event=>{
        setSelectedFile(event.target.files[0])
    };
    const uploadFile =()=>{
        if(!selectedFile){
           return alert("You have to choose the image!");
        }
       let fd = new FormData();
       fd.append("image", selectedFile, selectedFile.name);
        axios.post("/uploadfile", fd,{
            headers: {"Authorization": token}
          })
             .then(data =>{
                 dispatch(getUser());
             })
             .catch(err=>{
                 console.log(err);
             })
    }
    useEffect(()=>{
        if(token){
            dispatch(getBooking())
        }
    },[]);
    const userInfo = useSelector(state =>state.SignIn.user);
    const inputFile = useRef(null);
    const onButtonClick = () => {
        inputFile.current.click();
      };
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
                                <img src={token ? (userInfo.avatar) : user} onClick={onButtonClick}  alt="sdfdf"/>
                                <input style={{display:'none'}} type="file" ref={inputFile} onChange={e=>filterFile(e)} name="avatar"></input>
                                <div className="profile__user__info--ac">
                                    <p>{token ? userInfo.name:"Kadsfn Aniata"}</p>
                                    <input type="email" value={token ? userInfo.email:"sangvivi25@gmail.com"}></input>
                                </div>
                            </div>
                            <button onClick={()=>uploadFile()} className="btn-click">Avatar</button>
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