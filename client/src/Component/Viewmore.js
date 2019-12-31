import React, {Component, Fragment} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,   } from '@fortawesome/free-solid-svg-icons';
class Viewmore extends Component{
    render(){
        const {products} = this.props;
        return(
            <Fragment>
                <div className="viewmore">
                    <button className="slide__button slide__left" onClick={()=>this.prev()}>
                        <FontAwesomeIcon icon={faChevronLeft} className="slide__icon" />
                    </button>
                    <div className="viewmore__box">
                        <div className="row">
                                        {/* <div className="col-3" key={index}>
                                            <img src={item.img} alt="sdfs" className="img" />
                                        </div> */}
                            {
                               products.length >0 ?(
                                    products.map((item, index)=>{
                                      return(
                                         <div className="col-3" key={index}>
                                            <img src={item.img} alt="sdfs" className="img" />
                                        </div> 
                                        )
                                    })
                               ):null
                            }
                        </div>
                    </div>
                    <button className="slide__button slide__right" onClick={()=>this.next()}>
                        <FontAwesomeIcon icon={faChevronRight} className="slide__icon" />
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default Viewmore;