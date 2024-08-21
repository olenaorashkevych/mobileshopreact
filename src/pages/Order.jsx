import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Mycart from '../components/Mycart'
import { Appcontex } from '../App'
import Cartcontent from '../components/Cartcontent'
import Orderform from '../components/Orderform'


function Order() {

    const { cart } = useContext(Appcontex)
    const [order, setordrer] = useState(false)

    function checkcart() {
        if (cart.length == 0) {
            setordrer(false)
        }

        else {
            setordrer(true)
        }
        console.log(order)
    }


    useEffect(() => {
        checkcart()

    }, [cart])



    return (<div>
        <div class="page-content page-content-order">
            <div class="container">


                <div class="js-order-form ">   {/* to hide the form add hide class here*/}

                    <h2 class="title-square title-square--icon">
                        <a href="index.html" class="title-square__icon">
                            <svg class="icon icon-cart-bag">
                                <use href="#icon-cart-bag"></use>
                            </svg>
                        </a>
                        <span class="title-square__small"><a href="index.html" class="link-hover">Повернутися до
                            каталогу</a></span>
                        <span class="title-square__main">Форма замовлення</span>
                    </h2>

                    <div class="content-grid content-hold">

                        {order === true ? <Orderform /> : " "}

                        <div class="content-cart">
                            <div class="cart-added-list">

                                <h2 class="cart-added-list__title">Корзина:</h2>

                                <div class="cart-added-list__hold" id="js-cart-added-list">
                                    {order === true ? (cart.map(cartItem => <Cartcontent goodsincart={cartItem} />)) : ("")}
                                </div>

                                {/* <p class="cart-added-list__summ">
                                    <span class="summ-label">Сума до оплати:</span>
                                    <span class="summ-number">
                                        (2)
                                        <span class="sums">50000 грн</span>
                                    </span>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>



                <h2 class="title-square title-square--icon title-cart-success no-before js-order-success hide">
                    <a href="#" class="title-square__icon">
                        <svg class="icon icon-check-circle">
                            <use href="#icon-check-circle"></use>
                        </svg>
                    </a>
                    <span class="title-square__main">Замовлення відправлено!</span>
                    <span class="title-square__small">



                        <Link to="/" class="link-hover">Повернутися до
                            каталогу</Link>
                    </span>
                </h2>


                {order == false ? (<h2 class="title-square title-square--icon title-cart-empty js-order-empty">
                    <a href="index.html" class="title-square__icon">
                        <svg class="icon icon-shopping-bag">
                            <use href="#icon-shopping-bag"></use>
                        </svg>
                    </a>
                    <span class="title-square__main">Корзина пуста!</span>

                    <Link to="/search" class="link-hover">  <span class="title-square__small">Повернутися до
                        каталогу</span></Link>



                </h2>) : ("")}

            </div>
        </div>
    </div >

    )
}

export default Order