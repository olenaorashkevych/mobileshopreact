import React, { useContext } from "react";
import { Appcontex } from "../App";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";


export default function Orderform({ setorderstatus }) {

    const { cart, setcart } = useContext(Appcontex);

    const userSchema = yup.object().shape({
        name: yup.string().required('Будь ласка, введіть ваше ім\'я'),
        email: yup.string().email('Невірний формат електронної пошти').required('Поле електронної пошти є обов\'язковим'),
        phone: yup
            .string()
            .min(10, 'Телефон повинен містити щонайменше 10 цифр')
            .max(13, 'Телефон не може містити більше 13 цифр')
            .required('Телефон є обов\'язковим'),
        town: yup.string().required('Вкажіть населений пункт'),
        post_office: yup.number().max(99999, 'Номер відділення має бути до 5 цифр').required('Вкажіть відділення'),
        payment: yup.string().required('Виберіть спосіб оплати'),
    });


    // Функцція формування email повідомлення
    function setEmailMessage(values) {
        // Формуємо повідомлення
        let message = "<h3>Привіт, в тебе нове замовлення</h3>";

        message += `<p>
                        Контакти: ${values.name}
                            (<a href="mailto:${values.email}">
                                ${values.email}
                            </a>,
                            <a href="tel:${values.phone}">
                                ${values.phone}
                            </a>) 
                    </p>`;

        message += `<h3>Замовлені товари:</h3>`;

        let cartList = "";

        cart.map((cartitem) => {
            cartList += `<li>${cartitem.title} / ${cartitem.price} грн (${cartitem.count})</li>`;
        });

        message += `<ul>${cartList}</ul>`;

        return message;
    }

    // Рендер форми
    return (
        <div className="content-form">
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    town: "",
                    post_office: "",
                    payment: "",
                }}
                validationSchema={userSchema}
                onSubmit={values => {
                    // Добавляємо необхдні ключі дял API
                    values["to"] = "olenaorashkevych@gmail.com";
                    values["subject"] = "you have received a new order";
                    values["message"] = setEmailMessage(values);

                    // Відправляємо листа менеджеру
                    fetch("https://api.inderio.com/send-email", { method: "POST", body: JSON.stringify(values) });

                    // Показуємо блок успішної відправки форми
                    setorderstatus(true);

                    // Очищуємо корзину
                    setcart([]);

                }}>
                {
                    ({ errors, touched, isValid, dirty }) => (
                        <Form className="form-style form-order">
                            <div className="form-group">
                                <h2 className="mt-none">Контакти:</h2>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="name">
                                    <span className="required-label">Кому відправляти?</span>
                                </label>
                                <Field type="text" name="name" className="form-control" placeholder="ПІБ" />
                                {errors.name && touched.name ? <div className="error">{errors.name}</div> : null}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email:</label>
                                <Field type="email" name="email" className="form-control" placeholder="Для відправки даних про замовлення" />
                                {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">
                                    <span className="required-label">Телефон:</span>
                                </label>
                                <Field type="tel" name="phone" className="form-control" placeholder="+38 (___) __ - __ - ___" />
                                {errors.phone && touched.phone ? <div className="error">{errors.phone}</div> : null}
                            </div>

                            <div className="form-group form-group--divider">
                                <h2>Доставка:</h2>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="town">
                                    <span className="required-label">Населений пункт:</span>
                                </label>
                                <Field type="text" name="town" className="form-control" placeholder="В яке місто відправляємо замовлення?" />
                                {errors.town && touched.town ? <div className="error">{errors.town}</div> : null}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="post-office">
                                    <span className="required-label">Відділеня нової пошти:</span>
                                </label>
                                <Field type="number" name="post_office" className="form-control" placeholder="№" />
                                {errors.post_office && touched.post_office ? <div className="error">{errors.post_office}</div> : null}
                            </div>

                            <div className="form-group form-group--divider">
                                <h2>Оплата:</h2>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="input-payment">
                                    <span className="required-label">Спосіб оплати:</span>
                                </label>
                                <Field as="select" name="payment" className="form-control form-select" >
                                    <option value="">Вибрати спосіб оплати</option>
                                    <option value="1">Оплайн оплата</option>
                                    <option value="2">Наложений платіж</option>
                                    <option value="3">Юридичним особам</option>
                                </Field>
                                {errors.payment && touched.payment ? <div className="error">{errors.payment}</div> : null}
                            </div>

                            <div className="form-group form-action">
                                <button type="submit" className="btn w-fill">
                                    Оформити замовлення
                                </button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div >
    );
}
