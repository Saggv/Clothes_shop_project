import React ,{Component, Fragment} from "react";
import user  from "../Images/trend4.jpg";
class Comment extends Component{
    render(){
        return(
            <Fragment>
                <div className="cmt">
                    <div className="cmt__user">
                        <div className="cmt__user--img">
                            <img src={user} alt="dsfds" />
                        </div>
                        <div className="cmt__user--info">
                            <p>Knsg Nlsdifs</p>
                            <span>19/12/2019</span>
                        </div>
                    </div>
                    <div className="cmt__content">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard!</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Comment;