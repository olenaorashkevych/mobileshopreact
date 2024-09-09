import React from "react";
import Ordercart from "./Ordercart";
import Orderform from "./Orderform";
import { Link } from "react-router-dom";

export default function Ordernotempty({ setorderstatus }) {
    return (
        <div className="js-order-form">
            <h2 className="title-square title-square--icon">
                <Link to="/" className="title-square__icon">
                    <svg className="icon icon-cart-bag">
                        <use href="#icon-cart-bag"></use>
                    </svg>
                </Link>
                <span className="title-square__small">
                    <Link to="/" className="link-hover">
                        Повернутися до каталогу
                    </Link>
                </span>
                <span className="title-square__main">Форма замовлення</span>
            </h2>

            <div className="content-grid content-hold">
                <Orderform setorderstatus={setorderstatus} />
                <Ordercart />
            </div>
        </div>
    );
}
