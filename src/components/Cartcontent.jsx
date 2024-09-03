import React, { useContext } from "react";
import { Appcontex } from "../App";

export default function Cartcontent({ goodsincart }) {
    const { changequantity, changequantityminus, deleteitem } = useContext(Appcontex);

    return (
        <div className="cart-added-list__item">
            <button className="cart-added-list__item-btn-delete btn btn-light btn-xxs btn-icon" onClick={() => deleteitem(goodsincart)}>
                <svg className="icon icon-close">
                    <use href="#icon-close"></use>
                </svg>
            </button>
            <img src={`/img/catalog/${goodsincart.img}`} alt="" className="cart-added-list__item-img" />
            <p className="cart-added-list__item-text-hold">
                <a href="#" className="cart-added-list__item-title-link">
                    {goodsincart.title}
                </a>
                <span className="cart-added-list__item-meta-list">
                    <span className="cart-added-list__item-meta">Ціна: {goodsincart.price} грн</span>
                </span>
            </p>
            <input type="text" className="cart-added-list__item-count " placeholder="0" value={`${goodsincart.count}`} readOnly />
            <button className="cart-added-list__item-btn-plus btn btn-light btn-xxs btn-icon" onClick={() => changequantity(goodsincart)}></button>
            <button className="cart-added-list__item-btn-minus btn btn-light btn-xxs btn-icon" onClick={() => changequantityminus(goodsincart)}></button>
        </div>
    );
}
