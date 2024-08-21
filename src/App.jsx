import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css"
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Delivery from "./pages/Delivery";
import Search from "./components/Search";
import Category from "./pages/Category";
import Contacts from "./pages/Contacts";
import Order from "./pages/Order";
import { createContext, useState } from "react";
import Mycart from "./components/Mycart";
import CardProdcut from "./components/CardProdcut";

export const Appcontex = createContext(null)

function App() {

  const [cart, setcart] = useState([])
  const [cartpreview, setcartpreview] = useState(cart)

  // функція додання в корзину
  function addToCart(element) {

    // якщо елемент вже є в корзині, то збільшуємо кількість
    const itemexists = cart.findIndex(elementItem => elementItem.title === element.title)

    // перевіряємо чи товар не існує в массиві
    if (itemexists === -1) {

      // додаємо в обєкт з товаром ключ кількіть і його значення
      const newelement = { ...element, count: 1 }

      // оновлюємо корзину вже з кількістю
      setcart(prev => [...prev, newelement]);
    }

    // перевіряємо чи товар існує в массиві
    if (itemexists !== -1) {

      // робимо дублікат корзини, щоб вносити туди зміни
      const dublicateCart = [...cart]

      // в новому массиві змінюємо кількість
      dublicateCart[itemexists].count++;

      // оно
      setcart(dublicateCart)
    }

  }

  // Ініціалізація стану quantity зі значенням "10"
  const [quantity, setquantity] = useState("10")

  // Функція для збільшення кількості товару в кошику на одиницю
  function changequantity(goodsincart) {
    // Оновлюємо значення quantity, додаючи 1 до поточного кількості товару
    setquantity(goodsincart.count + 1)

    // Оновлюємо стан кошика: збільшуємо кількість товару в масиві, якщо його id співпадає з id товару
    const updatedcart = cart.map((item) =>
      item.id === goodsincart.id
        ? { ...item, count: item.count + 1 } // Збільшуємо count для потрібного товару
        : item // Інші товари залишаються без змін
    )

    // Оновлюємо стан кошика за допомогою setcart
    setcart(updatedcart);
  }


  // Функція для видалення товару з кошика
  function deleteitem(goodsincart) {
    // Встановлюємо кількість товару на 0
    setquantity(goodsincart.count = 0)

    // Фільтруємо кошик: видаляємо товар, якщо його id співпадає з goodsincart.id і його кількість дорівнює 0
    const updatedcart = cart.filter((items) =>
      items.id !== goodsincart.id || items.count !== 0
    );

    // Оновлюємо стан кошика за допомогою setcart
    setcart(updatedcart);
  }

  // Функція для зменшення кількості товару в кошику на одиницю
  function changequantityminus(goodsincart) {
    // Обчислюємо нову кількість товару
    const newquantity = goodsincart.count - 1

    // Оновлюємо значення quantity
    setquantity(newquantity)

    // Якщо кількість товару стає менше 1, видаляємо товар з кошика
    if (newquantity < 1) {
      deleteitem(goodsincart)
    }
    else {
      // Якщо кількість товару залишається більше 0, оновлюємо кошик зі зменшеною кількістю товару
      const updatedcart = cart.map((item) =>
        item.id === goodsincart.id
          ? { ...item, count: newquantity } // Зменшуємо count для потрібного товару
          : item // Інші товари залишаються без змін
      )

      // Оновлюємо стан кошика за допомогою setcart
      setcart(updatedcart);
    }
  }

  return (
    <Appcontex.Provider value={{ cart, setcart, addToCart, setquantity, quantity, changequantity, changequantityminus, deleteitem, }}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="search" element={<Search />} />
            <Route path="category/:catID" element={<Category />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="order" element={<Order />} />
            <Route path="mycart" element={<Mycart />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </Appcontex.Provider>


  );
}



export default App;
