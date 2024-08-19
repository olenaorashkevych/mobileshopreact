import { useContext } from "react";
import { Appcontex } from "../App";

export default function CardProdcut({ element }) {

    const { addToCart } = useContext(Appcontex);

    function clickhandler() {
        addToCart(element)
    }


    return (

        <div className="card-product">
            <div className="card-product__img-hold">
                <img src={"/img/catalog/" + element.img} alt="" className="card-product__img" />
            </div>
            <div className="card-product__text-hold">
                <a href="#" className="card-product__title-link">{element.title}</a>
                <span className="card-product__price">{element.price} грн <small>{element.oldprice} грн</small></span>
                <a href="#" className="card-product__btn-add js-addcart " onClick={clickhandler}>
                    <svg className="icon icon-cart">
                        <use href="#icon-cart-add"></use>
                    </svg>
                </a>
            </div>
        </div>
    )
}
