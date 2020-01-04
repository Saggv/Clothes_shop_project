import React, {Component, Fragment} from "react";
import {Showitem, Showitemmain} from "../Component/Showitem";
import userImg  from "../Images/trend4.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,   } from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";
import {fetchShow} from "../Action/Show";
class Show extends Component{
    constructor(props){
        super(props)
        this.state={
             prev:0,
             now:1,
             next:2,
             count:0
        }
    }
    componentDidMount(){
        this.props.fetchShow();
    }
    nextClick(){
        if(this.state.next === this.props.showImg.length-1){
            this.setState({
                next:2,
                now:this.state.next,
                prev:0,
       
            })
        }
        else{
            this.setState({
                prev: this.state.now,
                now: this.state.next,
                next: this.state.next+1
             })
        }
        console.log(this.state);
    }
    prevClick(){
        if(this.state.prev ===0){
            this.setState({
                next:0,
                now:this.props.showImg.length-2,
                prev:this.props.showImg.length-1,
       
            })
        }
        else{
            this.setState({
                prev:this.state.prev-1,
                now:this.state.prev,
                next: this.state.now
            })
        }
    }
    render(){
        const {showImg, users} =this.props;
        return(
            <Fragment>
                <div className="show">
                    <div className="container">
                        <div className="show__user">
                            <img src={users.hasOwnProperty('avatar') ? users.avatar : userImg} alt="dsfdsf" />
                        </div>
                        <div className="show__broad">
                            <button className="prev prev__top"  onClick={()=>this.prevClick()}>
                                <FontAwesomeIcon icon={faChevronLeft} className="slide__icon" />
                            </button>
                            {
                                showImg.length >0 ?(
                                    <Fragment>
                                        <div className="show__slide">
                                            <Showitem userImg={showImg[this.state.prev].userImg} showImg={showImg[this.state.prev].showImg}></Showitem>
                                            <Showitem userImg={showImg[this.state.next].userImg} showImg={showImg[this.state.next].showImg}></Showitem>
                                        </div>
                                        <Showitemmain userImg={showImg[this.state.now].userImg} showImg={showImg[this.state.now].showImg}></Showitemmain>
                                    </Fragment>
                                ):null
                            }
                            <button className="prev prev__bottom" onClick={()=>this.nextClick()}>
                                <FontAwesomeIcon icon={faChevronRight} className="slide__icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state=>({
    showImg: state.Show.showImg,
    users: state.SignIn.user
})

const mapDispatchToProps = dispatch=>({
      fetchShow: ()=> dispatch(fetchShow())
})

export default connect(mapStateToProps, mapDispatchToProps)(Show);