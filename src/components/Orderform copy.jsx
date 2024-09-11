import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from "formik";

export default function Orderform() {
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        phone: "",
        town: "",
        post_office: "",
        payment: "",
    });

    // Зміна стану дял всіх
    function changeformdata(e) {
        // Отримуємо елемент по якому була подія
        const el = e.target;

        // Отримуємо значення value
        const inputvalue = el.value;

        // Отримуємо name для ключа об'єкта
        const inputName = el.name;

        // Змінити стан
        setFormValue({
            ...formValue,
            [inputName]: inputvalue,
        });

        //
    }

    // Функція для відправки даних форми
    function submitFormData(e) {
        console.log("ВІДПРАВляємо", formValue);
    }

    return (
        <div className="content-form">
            <form className="form-style form-order" id="form-order" onSubmit={submitFormData}>
                <div className="form-group">
                    <h2 className="mt-none">Контакти:</h2>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="name">
                        <span className="required-label">Кому відправляти?</span>
                    </label>
                    <input type="text" id="name" name="name" className="form-control" required placeholder="ПІБ" value={formValue.name} onChange={changeformdata} />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">
                        Email:
                    </label>
                    <input type="email" id="email" name="email" value={formValue.email} className="form-control" placeholder="Для відправки даних про замовлення" onChange={changeformdata} />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                        <span className="required-label">Телефон:</span>
                    </label>
                    <input type="tel" id="phone" name="phone" value={formValue.phone} className="form-control" required placeholder="+38 (___) __ - __ - ___" onChange={changeformdata} />
                </div>

                <div className="form-group form-group--divider">
                    <h2>Доставка:</h2>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="town">
                        <span className="required-label">Населений пункт:</span>
                    </label>
                    <input type="text" id="town" name="town" value={formValue.town} className="form-control" required placeholder="В яке місто відправляємо замовлення?" onChange={changeformdata} />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="post-office">
                        <span className="required-label">Відділеня нової пошти:</span>
                    </label>
                    <input type="number" id="post-office" name="post_office" value={formValue.post_office} className="form-control" required placeholder="№" onChange={changeformdata} />
                </div>

                <div className="form-group form-group--divider">
                    <h2>Оплата:</h2>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="input-payment">
                        <span className="required-label">Спосіб оплати:</span>
                    </label>
                    <select name="payment" value={formValue.payment} className="form-control form-select" id="input-payment" required onChange={changeformdata}>
                        <option value="">Вибрати спосіб оплати</option>
                        <option value="1">Оплайн оплата</option>
                        <option value="2">Наложений платіж</option>
                        <option value="3">Юридичним особам</option>
                    </select>
                </div>

                <div className="form-group form-action">
                    <button type="submit" className="btn w-fill">
                        Оформити замовлення
                    </button>
                </div>
            </form>
        </div>
    );
}
