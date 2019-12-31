import React, {Fragment} from "react";
import user  from "../Images/trend4.jpg";
import trend5 from "../Images/trend5.jpg";
function Showitem({userImg, showImg}){
        return(
            <Fragment>
                <div className="show__box">
                    <div className="show__box__user">
                        <img src={userImg} alt="dfds" />
                    </div>
                    <div className="show__box__img">
                        <img src={showImg} alt="sdfsdf" />
                    </div>
                </div>
            </Fragment>
        )
}
function Showitemmain({userImg, showImg}){
    return(
        <div className="showitem-main__bg">
            <div className="showitem-main">
                <div className="showitem-main__box">
                    <div className="showitem-main__box__user">
                        <img src={userImg} alt="dfds" />
                    </div>
                    <div className="showitem-main__box__img">
                        <img src={showImg} alt="sdfsdf" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Showitem, Showitemmain};