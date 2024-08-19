import React, { useContext } from 'react'
import { Appcontex } from '../App';

export default function Cartcontent({ goodsincart }) {

    const { addToCart, cart, cartpreview, setquantity, quantity, updatedcart, changequantity, } = useContext(Appcontex);

    return (
        <div key={goodsincart.id} className="cart-added-list__item">
            <button className="cart-added-list__item-btn-delete btn btn-light btn-xxs btn-icon">
                <svg className="icon icon-close"><use href="#icon-close"></use></svg>
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
            <input type="text" className="cart-added-list__item-count " placeholder="0" value={`${goodsincart.count}`} />
            <button className="cart-added-list__item-btn-plus btn btn-light btn-xxs btn-icon" onClick={() => changequantity(goodsincart)}>+</button>
            <button className="cart-added-list__item-btn-minus btn btn-light btn-xxs btn-icon" >-</button>
        </div>
    )
}
