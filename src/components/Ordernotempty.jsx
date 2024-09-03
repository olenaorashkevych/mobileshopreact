import React from "react";
import Ordercart from "./Ordercart";
import Orderform from "./Orderform";

export default function Ordernotempty() {
    return (
        <div className="js-order-form">
            <h2 className="title-square title-square--icon">
                <a href="index.html" className="title-square__icon">
                    <svg className="icon icon-cart-bag">
                        <use href="#icon-cart-bag"></use>
                    </svg>
                </a>
                <span className="title-square__small">
                    <a href="index.html" className="link-hover">
                        Повернутися до каталогу
                    </a>
                </span>
                <span className="title-square__main">Форма замовлення</span>
            </h2>

            <div className="content-grid content-hold">
                <Orderform />
                <Ordercart />
            </div>
        </div>
    );
}
