import React, {Component, Fragment} from "react";
import Slide from "../Component/Slide";
import NowURL from "../Component/NowURL";
import Tabshop from "../Component/Tabshop";
import {connect} from "react-redux";
import {fetchSlide} from "../Action/Shop";
class Manshop extends Component{
     componentDidMount(){
         this.props.fetchSlide();
     }
    render(){
        const {menProduct} = this.props;
        return(
            <Fragment>
                <Slide></Slide>
                <NowURL></NowURL>
                <Tabshop products ={menProduct}></Tabshop>
            </Fragment>
        )
    }
}
const mapStateToPros=state=>({
     slideImg: state.Shop.slideImg,
     menProduct: state.Shop.MenProduct
})
const mapDispatchToProps = dispatch=>({
      fetchSlide: ()=>dispatch(fetchSlide())
})

export default connect(mapStateToPros, mapDispatchToProps)(Manshop);