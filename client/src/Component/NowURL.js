import React, {Component, Fragment} from "react";

class NowURL extends Component{
    render(){
        return(
            <Fragment>
                <div className="url">
                    <div className="container">
                        <ul className="url__list">
                            <li className="url__list__item">
                                <a href="/">Home</a>
                            </li>
                            <li className="url__list__item">
                                <a href="/">Man Shop</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NowURL;