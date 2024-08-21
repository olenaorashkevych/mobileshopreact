import React from 'react'

export default function Orderform() {
    return (
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
    )
}
