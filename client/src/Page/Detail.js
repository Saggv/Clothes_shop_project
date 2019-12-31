import React, {useEffect, Fragment} from "react";
import NowURL from "../Component/NowURL";
import Detailitem from "../Component/Detail_item";
import Comment from "../Component/Comment";
import InputComment from "../Component/InputComment";
import Viewmore from "../Component/Viewmore";
import Footer from "../Component/Footer";
import {fetchProductDetail, getProductId} from "../Action/Shop";
import {useParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function Detail(){
    const {id, forMen} =useParams();
    const dispatch = useDispatch();
    useEffect(() => {
           dispatch(getProductId(id));
           dispatch(fetchProductDetail());
      },[]);
    const detailProduct = useSelector(state=> state.Shop.productDetail);
    const viewMoreProductMen = useSelector(state=>state.Shop.productViewMoreMen);
    const viewMoreProductWomen = useSelector(state=>state.Shop.productViewMoreWomen);
    let productViewMore = [];
    forMen==="true" ? productViewMore = viewMoreProductMen : productViewMore=viewMoreProductWomen;
    return(
        <Fragment>
            <div className="detail">
                <NowURL></NowURL>
                <div className="container">
                    <Detailitem product ={detailProduct}></Detailitem>
                    <InputComment></InputComment>
                    <Comment></Comment>
                    <div className="xemthem">
                        <button className="btn-viewmore">Xem thêm</button>
                    </div>
                    <hr/>
                    <Viewmore products={productViewMore}></Viewmore>
                </div>
            </div> 
            <Footer></Footer>               
        </Fragment>
    )
}

export default Detail;