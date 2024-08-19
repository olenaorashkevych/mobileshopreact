import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css"
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Delivery from "./pages/Delivery";
import Search from "./components/Search";
import Category from "./pages/Category";
import Contacts from "./Contacts";
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
  const [quantity, setquantity] = useState("10")

  function changequantity(goodsincart) {
    setquantity(goodsincart.count + 1)
    const updatedcart = cart.map((item) => item.id == goodsincart.id ? { ...item, count: item.count + 1 } : item
    )
    setcart(updatedcart);
    console.log(updatedcart);
  }

  return (
    <Appcontex.Provider value={{ cart, setcart, addToCart, setquantity, quantity, changequantity }}>
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
