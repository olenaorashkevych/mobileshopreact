import React, { useContext } from "react";
import { Appcontex } from "../App";
import Cartcontent from "./Cartcontent";

export default function Ordercart() {
    const { cart } = useContext(Appcontex);

    function setCartSummPrice() {
        let viewSumm = 0;

        cart.map((good) => {
            viewSumm = viewSumm + good.price * good.count;
        });

        return viewSumm + " грн";
    }

    return (
        <div className="content-cart">
            <div className="cart-added-list">
                <h2 className="cart-added-list__title">Корзина:</h2>

                <div className="cart-added-list__hold" id="js-cart-added-items">
                    {cart.map((product) => (
                        <Cartcontent goodsincart={product} key={product.id} />
                    ))}
                </div>

                <p className="cart-added-list__summ">
                    <span className="summ-label">Сума до оплати:</span>
                    <span className="summ-number">
                        ({cart.length}) {setCartSummPrice()}
                    </span>
                </p>
            </div>
        </div>
    );
}
