import React, {useState, Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {closeSignin} from "../Action/Sign_in"; 
import {useSelector, useDispatch} from "react-redux";
import {isSignInClick, SignUpClick, SignInClick} from "../Action/Sign_in";
function Signup(){
    const dispatch = useDispatch();
    const isSignIn = useSelector(state => state.SignIn.isSignIn);
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");
    const onNameChange = (e)=>{
          setName(e.target.value);
    }
    const onUserNameChange = (e)=>{
        setUserName(e.target.value);
    }
    const onPasswordChange = (e)=>{
        setPassword(e.target.value);
    }
    const submitSignUp =(e)=>{
        e.preventDefault()
         if(name.length <=6 || userName.length <=6 || password.length <=6){
             setWarning("Please! More than 6 character !!!");
         }
         dispatch(SignUpClick({name, userName, password}));
    }
    const submitSignIn =(e)=>{
        e.preventDefault()
        if(userName.length <=6 || password.length <=6){
            setWarning("Please! More than 6 character !!!");
        }
        dispatch(SignInClick({userName, password}));
   }
    const swichSignIn =()=>{
        setName("");
        setUserName("");
        setPassword("");
        setWarning("");
        dispatch(isSignInClick())
    }
    return(
        <Fragment>
            <div className="bg-popu">
                <div className="popu">
                    <div className="popu__box">
                        <h2>{isSignIn ? "SIGN IN": "SIGN UP"}</h2>
                        <p>Hãy đăng nhập với mạng xã hội !</p>
                        <div className="social">
                            <FontAwesomeIcon icon={faFacebookF} className="social__item" />
                            <FontAwesomeIcon icon={faInstagram} className="social__item" />
                            <FontAwesomeIcon icon={faTwitter} className="social__item" />
                        </div>
                        <div className="box-in">
                            <p>Hãy nhập thông tin tài khoản của bạn:</p>
                            <form className="box-in__form">
                                {
                                    warning.length > 2 ? (
                                        <label>{warning}</label>
                                    ): null
                                }
                                {
                                    isSignIn ? null :(
                                       <Fragment>
                                            <input className="box-in__form--input" value={name} type="text" onChange={(e)=>onNameChange(e)} placeholder="Name" />
                                       </Fragment>
                                    )
                                }
                                <input className="box-in__form--input" value={userName} type="text" onChange={(e)=>onUserNameChange(e)} placeholder="User name" />
                                <input className="box-in__form--input" value={password} type="password" onChange={(e)=>onPasswordChange(e)} placeholder="Password" />
                                <button className="box-in__submit" onClick={(e)=>{isSignIn ? submitSignIn(e) : submitSignUp(e)}} >{isSignIn ? "Sign in": "Sign Up"}</button>
                            </form>
                            <div className="box-in__link">
                                <a onClick={()=>dispatch(closeSignin())}>Hủy</a>
                                <a onClick={()=>swichSignIn()}>{isSignIn ? "Sign Up" : "Sign In"}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Signup;