import { useContext, useState } from "react";
import { Appcontex } from "../App";
import Cartcontent from "./Cartcontent";
import Emptycart from "./Emptycart";

export default function Mycart() {


    const { addToCart, cart, cartpreview, setquantity, quantity, updatedcart, changequantity, } = useContext(Appcontex);


    return (

        <div div className="cart-added-list" >
            <button className="cart-added-list__btn btn btn-icon active show" id="js-cart-added-btn" data-box-toggle="#js-cart-added-list">
                {(cart.length > 0) ? (<span className="cart-added-summ show-num">{cart.length} </span>) : (<span className="cart-added-summ" ></span>)}
                <svg className="icon icon-cart-bag show"><use href="#icon-cart-bag"></use></svg>
            </button>
            <div className="cart-added-list__item-list show" id="js-cart-added-list">


                {
                    (cart.length === 0)
                        ? <Emptycart />
                        : cart.map(goodsincart => <Cartcontent goodsincart={goodsincart} />)
                }
            </div>
        </div >
    )
}
