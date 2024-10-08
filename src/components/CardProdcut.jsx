import { useContext } from "react";
import { Appcontex } from "../App";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function CardProdcut({ element }) {

    const { addToCart } = useContext(Appcontex);

    function clickhandler() {
        addToCart(element)
    }


    return (

        <div className="card-product">
            <div className="card-product__img-hold">

                <LazyLoadImage
                    alt={"product" + element.title}
                    className="card-product__img"
                    src={"/img/catalog/" + element.img}
                    fetchPriority={(element.id === 0) ? 'high' : 'auto'}
                    height="264"
                    width="264" />
            </div>
            <div className="card-product__text-hold">
                <a href="#" className="card-product__title-link">{element.title}</a>
                <span className="card-product__price">{element.price} грн <small>{element.oldprice} грн</small></span>
                <a href="#" className="card-product__btn-add js-addcart " onClick={clickhandler} aria-label={`Add product ${element.title}`}>
                    <svg className="icon icon-cart">
                        <use href="#icon-cart-add"></use>
                    </svg>
                </a>
            </div>
        </div >
    )
}
