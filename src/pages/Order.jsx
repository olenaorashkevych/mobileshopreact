import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Mycart from '../components/Mycart'
import { Appcontex } from '../App'


function Order() {
    const { cart } = useContext(Appcontex)
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

                        <div class="content-form">

                            {/* <!-- Щоб приховати добавити .hidden, щоб показати забрати клас .hidden --> */}
                            <form class="form-style form-order" id="form-order">

                                <div class="form-group">
                                    <h2 class="mt-none">Контакти:</h2>
                                </div>

                                <div class="form-group">
                                    <label class="form-label" for="name"><span class="required-label">Кому
                                        відправляти?</span></label>
                                    <input type="text" id="name" name="name" class="form-control" required
                                        placeholder="ПІБ" />
                                </div>

                                <div class="form-group">
                                    <label class="form-label" for="email">Email:</label>
                                    <input type="email" id="email" name="email" class="form-control"
                                        placeholder="Для відправки даних про замовлення" />
                                </div>

                                <div class="form-group">
                                    <label class="form-label" for="phone"><span
                                        class="required-label">Телефон:</span></label>
                                    <input type="tel" id="phone" name="phone" class="form-control" required
                                        placeholder="+38 (___) __ - __ - ___" />
                                </div>

                                <div class="form-group form-group--divider">
                                    <h2>Доставка:</h2>
                                </div>

                                <div class="form-group">
                                    <label class="form-label" for="town"><span class="required-label">Населений
                                        пункт:</span></label>
                                    <input type="text" id="town" name="town" class="form-control" required
                                        placeholder="В яке місто відправляємо замовлення?" />
                                </div>

                                <div class="form-group">
                                    <label class="form-label" for="post-office"><span class="required-label">Відділеня нової
                                        пошти:</span></label>
                                    <input type="number" id="post-office" name="post-office" class="form-control" required
                                        placeholder="№" />
                                </div>

                                <div class="form-group form-group--divider">
                                    <h2>Оплата:</h2>
                                </div>

                                <div class="form-group">
                                    <label class="form-label" for="input-payment"><span class="required-label">Спосіб
                                        оплати:</span></label>
                                    <select name="payment" class="form-control form-select" id="input-payment" required>
                                        <option value="">Вибрати спосіб оплати</option>
                                        <option value="1">Оплайн оплата</option>
                                        <option value="2">Наложений платіж</option>
                                        <option value="3">Юридичним особам</option>
                                    </select>
                                </div>

                                <div class="form-group form-action">
                                    <button type="submit" class="btn w-fill js-send-form" disabled="disabled">Оформити
                                        замовлення</button>
                                </div>
                            </form>
                        </div>

                        {/* <div class="content-cart">

                            <div class="cart-added-list">

                                <h2 class="cart-added-list__title">Корзина:</h2>

                                <div class="cart-added-list__hold" id="js-cart-added-list">



                                </div>

                                <p class="cart-added-list__summ">
                                    <span class="summ-label">Сума до оплати:</span>
                                    <span class="summ-number">
                                        (<span class="js-cart-added-summ"></span>)
                                        <span class="sums">0 грн</span>
                                    </span>
                                </p>
                            </div>
                        </div> */}
                        <Mycart />
                    </div>
                </div>

                {/* 
			<!-- Щоб приховати добавити .hidden, щоб показати забрати клас .hidden --> */}
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
                {/* 
			<!-- Щоб приховати добавити .hidden, щоб показати забрати клас .hidden h --> */}
                <h2 class="title-square title-square--icon title-cart-empty js-order-empty">
                    <a href="index.html" class="title-square__icon">
                        <svg class="icon icon-shopping-bag">
                            <use href="#icon-shopping-bag"></use>
                        </svg>
                    </a>
                    <span class="title-square__main">Корзина пуста!</span>

                    <Link to="/search" class="link-hover">  <span class="title-square__small">Повернутися до
                        каталогу</span></Link>



                </h2>

            </div>
        </div>
    </div >

    )
}

export default Order