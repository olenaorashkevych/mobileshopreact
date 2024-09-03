import React from "react";

export default function Orderempty() {
    return (
        <h2 className="title-square title-square--icon title-cart-empty">
            <a href="index.html" className="title-square__icon">
                <svg className="icon icon-shopping-bag">
                    <use href="#icon-shopping-bag"></use>
                </svg>
            </a>
            <span className="title-square__main">Корзина пуста!</span>
            <span className="title-square__small">
                <a href="index.html" className="link-hover">
                    Повернутися до каталогу
                </a>
            </span>
        </h2>
    );
}
