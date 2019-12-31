import React, {Component, Fragment} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';
import {addToCart} from "../Action/Cart";
import {getCookie} from "../Reducers/getCookie";
import {useDispatch} from "react-redux";
function Detail_item({product}){
    const dispatch = useDispatch();
    const AddToCart=(id)=>{
            const userCookie = "userCookie";
            const cookie = getCookie(userCookie);
            if(cookie.length === 0){
                let  cookieValue = Math.floor(Math.random() * 1000000);
                document.cookie = `userCookie= ${cookieValue}`;
            }
            dispatch(addToCart(id));
    }
    return(
        <Fragment>
                <div className="detail-item">
                    <h1>      
                        {
                            product ? (
                                product.name
                            ):null
                        }
                    </h1>
                    <div className="detail-item__box">
                        <div className="detail-item__box__img">
                            <div className="detail-item__box__img--box">
                               {
                                    product ? (
                                        <img src={product.img} alt="dfds" />
                                    ):null
                               }
                            </div>
                            <ul className="detail-item__box--color">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>

                        <div className="detail-item__des">
                            <div className="detail-item__des__price">
                                   ${
                                        product ?(
                                            product.price
                                        ):null
                                    }
                            </div>
                            <div className="detail-item__des__amount">
                                    <span className="detail-item__propety detail-item__propety--il">Số lượng</span>
                                    <span>&#43;</span>
                                    <span>1</span>
                                    <span>	&#45;</span>
                            </div>
                            <div className="detail-item__des__size">
                                    <span className="detail-item__propety detail-item__propety--il">Size</span>
                                    <span>S</span>
                                    <span>M</span>
                                    <span>L</span>
                                    <span>X</span>
                            </div>
                            <div className="detail-item__des__star">
                                <span className="detail-item__propety detail-item__propety--il">Đánh giá: </span>
                                <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                                <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                                <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                                <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                                <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                                <span>(23k đánh giá)</span>
                            </div>
                            <div className="detail-item__des__trans">
                                <span className="detail-item__propety detail-item__propety--bl">Vận chuyển</span>
                                <p>
                                     Miến phí vận chuyển cho khách hàng có đơn <br/> hàng trên $100.
                                </p>
                            </div>
                            <div className="detail-item__des__trans">
                                <span className="detail-item__propety detail-item__propety--bl">Sản phẩm</span>
                                <p>
                                Shop đảm bảo 5 ngày giao hàng / hoàn tiền
                                <br/>
                                Sản phẩm được nhập khẩuđã có 
                                chứng nhận của các <br/> cơ quan có thẩm quyền.
                                </p>
                            </div>
                            <div className="detail-item__des__action">
                                <button className="btn-primary mr-1" onClick={()=>AddToCart(product.id)}>ADD TO CART</button>
                                <button className="btn-secondary">Chat với shop</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="detali-descp">
                    <h3>Mô tả sản phẩm</h3>
                    <p>Kích cỡ: M [45-55 Kg], L [55 - 65 Kg], XL [65-75 Kg], XXL [75-85 kg]</p>
                    <br/>
                    <p>6 Màu: xám ,tím than  , xanh bích , xanh da , đỏ đô, đen</p>
                    <br/>
                    <p>Thiết kế trang nhã, màu sắc ấn tượng ,tiện dụng thoải mái , mang đển vẻ thanh lịch tự tiên cho người mặc .
                        form áo xuông phù hợp mọi độ tuổi, tay áo bo nhẹ khỏe khoắn .
                        Áo có thiết kế thêu W logo nổi trước ngực sắc nét BAO ĐẸP CĂNG ĐÉT. cùng với bo tay bo cổ được phối viền caro đen trắng  đẹp mắt tạo điểm nhấn và thêm phần mạnh mẽ.
                        Mặc được trong nhiều dịp khách nhau như đi dạo phố cùng bạn bè , đi phượt và rất thích hợp khi ra ngoài đường và những trưa hè nắng nóng . 
                        Cùng với chất liệu thun cá sấu cao cấp, co dãn và thấm hút mồ hôi tuyệt vời, áo đem lại sự thoải mái tuyệt đối cho người mặc.
                        Nhanh tay mua ngay 4 áo mặc suốt tuần nào các chàng trai!
                    </p>
                </div>
                <hr/>
                <div className="detail-vote">
                    <div className="detail-item__des__star">
                        <span className="detail-vote__title">Đánh giá sản phẩm: </span>
                        <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                        <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                        <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                        <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                        <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                        <span>(23k đánh giá)</span>
                    </div>
                    <div className="detail-vote__star">
                        <div className="detail-item__des__star">
                            <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                            <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                            <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                            <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                            <FontAwesomeIcon icon={faStar} className="detail-item__des__star-icon" />
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default Detail_item;