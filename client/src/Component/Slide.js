import React, {Fragment, Component} from "react";

import img1 from "../Images/trend1.jpg";
import img2 from "../Images/trend4.jpg";
import img3 from "../Images/trend5.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,   } from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";

class Slide extends Component{
    constructor(props) {
        super(props);
         this.state={
              slide:0,
         }
       }
    componentDidMount(){
        this.interval = setInterval(() =>{
             if(this.state.slide === this.props.slideImg.length-1){
                 this.setState({
                     slide: 0
                 })
             }
             this.setState({
                slide: this.state.slide +1
            })
        }, 10000)
    }
    prev=()=>{
        this.setState({
            slide: this.props.slideImg.slide-1
        })
       if(this.state.slide ===0){
           this.setState({
               slide: this.props.slideImg
           })
       }
    }
    next=()=>{
        this.setState({
            slide: this.state.slide+1
        })
        if(this.state.slide === this.props.slideImg.length-1){
            this.setState({
                slide:1
            })
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){
        const {slideImg} = this.props;
        return(
            <Fragment>
                <div className="slide">
                    <button className="slide__button slide__left" onClick={()=>this.prev()}>
                        <FontAwesomeIcon icon={faChevronLeft} className="slide__icon" />
                    </button>
                    {
                        slideImg.length > 0 ?(
                            <div className="slide__box">
                                <img src={slideImg[this.state.slide].slideImg}alt="sdfs" className="img" />
                            </div>
                        ):null
                    }
                    <button className="slide__button slide__right" onClick={()=>this.next()}>
                        <FontAwesomeIcon icon={faChevronRight} className="slide__icon" />
                    </button>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps=state=>({
     slideImg: state.Shop.slideImg
})

export default connect(mapStateToProps, null)(Slide);