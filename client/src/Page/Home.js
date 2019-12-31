import React, {Component, Fragment} from 'react';
import trend1 from '../Images/trend1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight,   } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Component/Footer';

import {connect} from "react-redux";
import {fetchTrend} from "../Action/Trend";
import {NavLink} from "react-router-dom";
class Home extends Component{
    componentDidMount(){
        this.props.fetchTrend();
    }
     render(){
         const {TrendImg,Popular, MenShopHome,WomenShopHome} = this.props;
         const {trend} = TrendImg;
         return(
             <Fragment>
            <div className="container">
                <section className="hero-area">
                    <div className="hero-area__info">
                        <h1 className="hero-area__info--logo">Clothes Shop</h1>
                        <p>Luôn cập nhật các xu hướng thiết kế,
                        phong cách thời trang hiện đại dành cho giới trẻ và 
                        mang đến cho khách hàng những sản phẩm mới nhất.
                        </p>
                        <a href="/" onClick={()=>this.props.testHome()} className="btn-primary">Shopping now</a>
                    </div>
                    <div className="hero-area__trend">
                        <h2 className="hero-area__trend__title">Trend of the week</h2>
                        <div className="home__relative">
                            <div className="line-text">
                                <div className="line-text__left"></div>
                                <span className="line-text__text">{(new Date).toLocaleDateString()}</span>
                                <div className="line-text__left"></div>
                            </div>
                            <a href="/" className="chevron chevron__prev">
                                <FontAwesomeIcon icon={faChevronLeft} className="chevron__icon" />
                            </a>
                            <div className="hero-area__trend__img">
                            {
                              trend ?(trend.map((item, index)=>{
                                   return <div className={"hero-area__trend__img--"+ `${index+1}`} key={index}>
                                            <img src={item.trendImg} className="img" alt="trfdsf" />
                                        </div>
                                })): null
                            }
                            </div>
                            {/* <div className="hero-area__trend__img">
                                <div className="hero-area__trend__img--1">
                                    <img src={trend1} className="img" alt="trfdsf" />
                                </div>
                                <div className="hero-area__trend__img--2">
                                    <img src={trend1} className="img"  alt="trfdsf" />
                                </div>
                                <div className="hero-area__trend__img--3">
                                    <img src={trend1} className="img"  alt="trfdsf" />
                                </div>
                                <div className="hero-area__trend__img--4">
                                    <img src={trend1} className="img"  alt="trfdsf" />
                                </div>
                                <div className="hero-area__trend__img--5">
                                    <img src={trend1}  className="img"  alt="trfdsf" />
                                </div>
                            </div> */}
                            <a href="/" className="chevron chevron__next">
                                <FontAwesomeIcon icon={faChevronRight}  className="chevron__icon" />
                            </a>
                        </div>
                    </div>
                </section>
                <section className="cta">
                    <h1 className="hero-area__info--logo">Clothes Shop</h1>
                    <h2 className="cta--header">Nơi mua sắm trực tuyến</h2>
                    <p>Tại trang web khách hàng có thể trải nghiệm các dịch vu mua sắm sản phẩm tại bất cứ nơi đâu.
                            Dù không có nhiều sản phẩm như các trang thương mại điện từ lớn nhũng chúng tôi luôn tự hào 
                            về chất lượng cũng như các dịch vụ của chúng tôi cung cấp.</p>
                </section>
                </div>
            {/* POPULAR PRODUCTS */}
            <section className="popular">
                <h2 className="header header--1">
                    Những sản phẩm phổ biến
                </h2>
                <div className="popular__row">
                    {
                        Popular ? (
                            Popular.map((item, index)=>{
                                return <div className="popular__col" key={index}>
                                <img src={item.img} alt="sdfsdf" />
                                <div className="popular__col__info">
                                <span> ${item.price}</span>
                                    <button className="btn-primary">Add to cart</button>
                                    <a href="/" className="btn-secondary">View detail</a>
                                </div>
                                </div>
                            })
                        ): null
                    }
                </div>
            </section>
            {/* MAN SHOP */}
            <section className="shop-int">
                <div className="container">
                    <h3 className="header header--1">shop nam</h3>
                    <div className="shop-int__box">
                        {
                            MenShopHome ?(
                                MenShopHome.map((item, index)=>{
                                    return <div className={`shop-int__box--${index+1} shop-int__box--div`} key={index}>
                                        <img src={item.img} alt="avt shop men" className="img" />
                                        <a href="/" className="text-center-div">{item.cag}</a>
                                    </div>
                                })
                            ): null
                        }
                        {/* <div className="shop-int__box--1 shop-int__box--div">
                            <img src={trend1} alt="avt shop men" className="img" />
                        </div>
                        <div className="shop-int__box--2 shop-int__box--div">
                            <img src={trend1} alt="avt shop men" className="img" />
                            <a href="/" className="text-center-div"> Shirt </a>
                        </div>
                        <div className="shop-int__box--3 shop-int__box--div">
                            <img src={trend1} alt="avt shop men" className="img" />
                            <a href="/" className="text-center-div"> TROUSERS </a>
                        </div>
                        <div className="shop-int__box--4 shop-int__box--div">
                            <img src={trend1} alt="avt shop men" className="img" />
                            <a href="/" className="text-center-div"> Shoe </a>
                        </div>
                        <div className="shop-int__box--5 shop-int__box--div">
                            <img src={trend1} alt="avt shop men" className="img" />
                            <a href="/" className="text-center-div"> Sunglass </a>
                        </div>
                        <div className="shop-int__box--6 shop-int__box--div">
                            <img src={trend1} alt="avt shop men" className="img" />
                            <a href="/" className="text-center-div"> Watch </a>
                        </div> */}
                    </div>
                    <div className="text-center">
                        <NavLink to="/manshop" className="btn-primary">View more</NavLink>
                    </div>
                </div>
            </section>

            {/* SECTION CONTACT HOME */}
            <section className="ct-home">
                <div className="container">
                        <div className="ct-home__box">
                            <h1 className="hero-area__info--logo">Clothes Shop</h1>
                            <p>Hãy để chúng tôi tư vấn nếu bạn để lại email!</p>
                            <form className="form">
                                <input type="text" className="form__input" placeholder="Name" />
                                <input type="email" className="form__input" placeholder="Email" />
                                <button type="submit" className="btn__submit">Send</button>
                            </form>
                        </div>
                </div>
            </section>

            {/* SECTION WOMAM SHOP */}
            <section className="shop-int">
                <div className="container">
                    <h3 className="header header--1 text-right"> shop woman</h3>
                    <div className="shop-int__box">
                        {
                            WomenShopHome ?(
                                WomenShopHome.map((item, index)=>{
                                    return <div className={`shop-int__box--${index+1} shop-int__box--div`} key={index}>
                                        <img src={item.img} alt="avt shop men" className="img" />
                                        <a href="/" className="text-center-div">{item.cag}</a>
                                    </div>
                                })
                            ): null
                        }
                    </div>
                    <div className="text-center">
                        <NavLink to="/womenshop" className="btn-primary">View more</NavLink>
                    </div>
                </div>
            </section>

            <section className="home-feeback">
                <div className="container">
                    <div className="home-feeback__ground">
                         <div className="home-feeback__box">
                             <div className="home-feeback__head">
                                <span className="quote quote__top">&ldquo;</span>
                                <p>
                                Thời trang hiện đại mang đến cái nhìn khác về con người bạn.
                                Giúp bạn tạo lập phong cách và trải nghiệm môi trường mới hơn. Mang đến cho 
                                mỗi chúng ta sự phù hợp vì thế hay đến với website này! 
                                </p>
                                <span className="quote quote__bottom">&rdquo;</span>
                             </div>
                             <div className="home-feeback__user">
                                <div className="home-feeback__user__img">
                                    <img src={trend1} alt="avst user"  />
                                </div>
                                <p className="home-feeback__user--name">
                                    Soknus Taline
                                </p>
                            </div>
                         </div>
                         <div className="dot-icon">
                             <span className="dot-icon__item"></span>
                             <span className="dot-icon__item dot-icon__item--active"></span>
                             <span className="dot-icon__item"></span>
                         </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </Fragment>
         )
     }
}

const mapStateToProps=state=>({
     TrendImg: state.Trend,
     Popular: state.Trend.popularProduct,
     MenShopHome: state.Trend.productMenHome,
     WomenShopHome: state.Trend.productWomenHome
})

const mapDispatchToProp = dispatch=>({
     fetchTrend: ()=>dispatch(fetchTrend())
})

export default connect(mapStateToProps, mapDispatchToProp)(Home);