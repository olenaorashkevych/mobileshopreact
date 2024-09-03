import React from "react";

export default function Ordersuccess() {
    return (
        <h2 className="title-square title-square--icon title-cart-success no-before">
            <a href="#" className="title-square__icon">
                <svg className="icon icon-check-circle">
                    <use href="#icon-check-circle"></use>
                </svg>
            </a>
            <span className="title-square__main">Замовлення відправлено!</span>
            <span className="title-square__small">
                <a href="index.html" className="link-hover">
                    Повернутися до каталогу
                </a>
            </span>
        </h2>
    );
}
