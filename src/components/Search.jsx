import React from 'react';
import { useEffect, useState } from 'react'
import CardProdcut from './CardProdcut';


function Search() {

    // задаємо стан пошуковому слову
    const [keyword, setkeyword] = useState("")

    // задаємо стан результатів пошуку
    const [search, setsearch] = useState([])


    // створюємо функцію для зміни стану пошукового слова
    function getkeyword(e) {

        // стан зміни пошукового слова
        setkeyword(e.target.value)
    }

    // функція отримання результатів пошуку з сервера
    async function getSearch() {
        const res = await fetch(`https://667a796bbd627f0dcc8f205a.mockapi.io/products?search=+${keyword}`)
        const resjson = await res.json()
        setsearch(resjson)
    }

    // при завантаженні сторінки робимо відразу пошук
    useEffect(() => {
        getSearch()
    }, [])


    return (
        <div className="catalog" id="catalog">
            <div className="container">
                <div className="catalog__header">
                    <div className="catalog__form form-style">
                        <input
                            type="text"
                            className="form-control catalog__form-search"
                            id="input-search"
                            placeholder="Що будемо шукати?"
                            value={keyword}
                            onChange={getkeyword}
                        />
                        <button
                            className="catalog__form-btn"
                            onClick={getSearch}
                        >
                            <svg className="icon icon-search">
                                <use href="#icon-search"></use>
                            </svg>
                        </button>
                    </div>
                    <h3 className="catalog__products-summ">
                        Знайдено товарів: {search.length}
                    </h3>
                </div>
                <div className="catalog__content" id="catalog-products">
                    {
                        (search == 'Not found')
                            ? <h2>товарів не знайдено</h2>
                            : search.map(element => <CardProdcut element={element} key={element.id} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;
