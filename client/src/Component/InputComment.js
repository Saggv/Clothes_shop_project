import React , {Component, Fragment} from "react";
import user  from "../Images/trend4.jpg";
class InputComment extends Component{
    render(){
        return(
            <Fragment>
                <div className="int-cmt">
                    <div className="int-cmt__img">
                        <img src={user} alt="Sdfdsf" />
                    </div>
                    <form>
                        <input type="text" className="int-cmt__input" placeholder="Comment"></input>
                        <button type="submit" className="int-cmt__submit">SEND</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default InputComment;