import { useContext, useState } from "react";
import { Appcontex } from "../App";
import Cartcontent from "./Cartcontent";
import Emptycart from "./Emptycart";

export default function Mycart() {
    const { cart } = useContext(Appcontex);

    const [activecart, setactivecart] = useState(false);
    function showcartcontent(e) {
        setactivecart(!activecart);
    }
    return (
        <div className="cart-added-list" aria-label="Button cart">
            {/* <div className={`catalog__select-category dropdown ${seecat ? 'show' : ''}`}></div> */}
            <button className="cart-added-list__btn btn btn-icon " onClick={showcartcontent}>
                {cart.length > 0 ? <span className="cart-added-summ show-num">{cart.length} </span> : <span className="cart-added-summ"></span>}
                <svg className="icon icon-cart-bag">
                    <use href="#icon-cart-bag"></use>
                </svg>
            </button>
            <div className={`cart-added-list__item-list ${activecart ? "show" : ""}`}>{cart.length === 0 ? <Emptycart /> : cart.map((goodsincart) => <Cartcontent goodsincart={goodsincart} key={goodsincart.id} />)}</div>
        </div>
    );
}
