import { useContext, useState } from "react";
import { Appcontex } from "../App";

export default function Mycart() {


    const { addToCart, cart, cartpreview, setquantity, quantity, updatedcart, changequantity, } = useContext(Appcontex);
    function cartpreviewhandler(goodsincart) {
        changequantity(goodsincart)


    }

    return (

        <div div className="cart-added-list" >
            <button className="cart-added-list__btn btn btn-icon active show" id="js-cart-added-btn" data-box-toggle="#js-cart-added-list">
                {(cart.length > 0) ? (<span className="cart-added-summ show-num">{cart.length} </span>) : (<span className="cart-added-summ" ></span>)}
                <svg className="icon icon-cart-bag show"><use href="#icon-cart-bag"></use></svg>
            </button>
            <div className="cart-added-list__item-list show" id="js-cart-added-list">

                <span className="no-result no-result--inline">
                    <img src="img/no-result/no-result-v2.png" alt="No results" className="no-result__img" />
                    {(cart.length > 0) ? (<span className="no-result__title hide" >Корзина пуста!</span>) : ((<span className="no-result__title" >Корзина пуста!</span>))
                    }
                </span>
                {cart.map(goodsincart => (


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
                        <button className="cart-added-list__item-btn-plus btn btn-light btn-xxs btn-icon" onClick={cartpreviewhandler}>+</button>
                        <button className="cart-added-list__item-btn-minus btn btn-light btn-xxs btn-icon" >-</button>
                    </div>
                ))}
            </div>
        </div >
    )
}
