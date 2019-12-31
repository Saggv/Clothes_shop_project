import React, {Component, Fragment} from "react";
import Pagination from "./Pagination";
import Footer from "./Footer";
import {connect} from "react-redux";

import {getProductId} from "../Action/Shop";
import {Link} from "react-router-dom";
import {addToCart} from "../Action/Cart";
import {getCookie} from "../Reducers/getCookie";

class Tabshop extends Component{
    getProductId=(id)=>{
        this.props.GetProductId(id)
    }
    AddToCart=(id)=>{
        const userCookie = "userCookie";
        const cookie = getCookie(userCookie);
        if(cookie.length === 0){
            let  cookieValue = Math.floor(Math.random() * 1000000);
            document.cookie = `userCookie= ${cookieValue}`;
        }
        this.props.addToCart(id);
    }
    render(){
        const {products, addToCart} = this.props;
        return(
            <Fragment>
                <div className="tab">
                    <div className="container">
                        <ul className="tab__nav">
                            <li className="tab__nav__item">
                                <a href="/">Áo</a>
                            </li>
                            <li className="tab__nav__item">
                                <a href="/">Quần</a>
                            </li>
                            <li className="tab__nav__item">
                                <a href="/">Giày</a>
                            </li>
                            <li className="tab__nav__item">
                                <a href="/">Khác</a>
                            </li>
                        </ul>
                        </div>
                        <div className="tab__content">
                            <div className="tab__filter">
                                <select>
                                    <option value="moinhat">Mới nhất</option>
                                    <option value="banchaynhat">Bán chạy nhất</option>
                                    <option value="datnhat">Đắt nhất</option>
                                    <option value="renhat">Rẻ nhất</option>
                                </select>
                            </div>
                            <div className="container">
                                <div className="tab__row">
                                    {
                                        products.length > 0 ? (
                                            products.map((item, index)=>{
                                                return(
                                                    <div className="tab__item" key={index}>
                                                        <div className="tab__item--imgbox">
                                                            <Link onClick={()=>this.getProductId(item.id)} to={'/detail/' +item.name +'.'+item.forMen+'.'+ item.id+'.html'}><img src={item.img} alt="sdfd"/></Link>
                                                        </div>
                                                        <div className="tab__item--detail">
                                                        <div className="tab__item--detail--name">
                                                                <h3>{item.name}</h3>
                                                                <p>${item.price}</p>
                                                        </div>
                                                            <div className="text-center">
                                                                <button className="btn-primary" onClick={()=>this.AddToCart(item.id)}>ADD TO CART</button>
                                                            </div>
                                                        </div>
                                                   </div>
                                                )
                                            })
                                        ):null
                                    }
                                  
                                </div>
                                <Pagination></Pagination>
                            </div>
                        </div>
                </div>
                <Footer></Footer>
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch=>({
     GetProductId: (id)=>dispatch(getProductId(id)),
     addToCart: (id)=>dispatch(addToCart(id))
})
export default connect(null, mapDispatchToProps)(Tabshop);