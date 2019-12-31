import React, {Component, Fragment} from "react";
function Profile_item({bookingData}){
    return(
        <Fragment>
            {
                bookingData.length > 0 ? (
                    bookingData.map((item, index)=>{
                        return <div className="profile__item" key={index}>
                                    <img src={item.productsId.img} alt="dfds" />
                                    <div className="profile__item__info">
                                        <div className="profile__item__info__detail">
                                            <div className="profile__item__info__detail__item">
                                                <p>{item.productsId.name}</p>
                                                <p>Size:<span>X</span></p>
                                                <p>Số lượng: <span>{item.amount}</span></p>
                                                <p>Ngày chuyển: <span>{new Date(Number(item.dateBook)).toLocaleDateString()}</span></p>
                                                <p>Ngày nhận: <span>{new Date(Number(item.dateBook)+259200).toLocaleDateString()}</span></p>
                                            </div>
                                        </div>
                                        <p className="profile__item__info__pr">Số tiền: <span>{item.amount*item.productsId.price}</span></p>
                                    </div>
                                </div>
                    })
                ):<h3>Bạn chưa có dữ liệu nào !</h3>
            }
        </Fragment>
    )
}
export default Profile_item;