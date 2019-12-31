import React, {useEffect, Fragment} from "react";
import Slide from "../Component/Slide";
import NowURL from "../Component/NowURL";
import Tabshop from "../Component/Tabshop";
import {fetchWomenProduct} from "../Action/Shop";
import { useSelector, useDispatch } from 'react-redux';
function WomenShop(){
    const dispatch = useDispatch();
        useEffect(() => {
            dispatch(fetchWomenProduct());
        },[]);
        const womenShop = useSelector(state =>state.Shop.womenProduct);
        const data =[]
    return(
        <Fragment>
            <Slide></Slide>
            <NowURL></NowURL>
            <Tabshop products ={womenShop}></Tabshop>
        </Fragment>
    )
}

export default WomenShop;