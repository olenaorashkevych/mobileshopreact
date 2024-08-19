import React, { useEffect, useState } from 'react'
import CardProdcut from './CardProdcut'
import Allcats from './Allcats'
import { Link, useParams } from 'react-router-dom'



export default function Catalog() {
    const [catalogue, setcatalogue] = useState([])
    const [categorylist, setcategorylist] = useState([])
    const [seecat, setseecat] = useState(false)

    const { catID } = useParams();

    async function getDataFromBdForCatalog() {
        const url = (catID)
            ? "https://667a796bbd627f0dcc8f205a.mockapi.io/products?catid=" + catID
            : "https://667a796bbd627f0dcc8f205a.mockapi.io/products"
        const resp = await fetch(url)
        const respjason = await resp.json()
        setcatalogue(respjason)
    }

    async function getcategoires() {
        const response = await fetch("https://667a796bbd627f0dcc8f205a.mockapi.io/categories")
        const responsejson = await response.json()
        setcategorylist(responsejson)
    }

    function showallcategories() {
        setseecat(!seecat)
    }

    useEffect(() => {
        getDataFromBdForCatalog();
        getcategoires();
    }, [catID]);

    return (
        <div className="catalog" id="catalog">
            <div className="container">

                <div className="catalog__header">
                    <div className={`catalog__select-category dropdown ${seecat ? 'show' : ''}`}>
                        <h3 onClick={showallcategories} className='dropdown-btn' data-box-toggle="#dropdown-category-list">
                            Вибрати категорію
                        </h3>

                        <div className={"dropdown-content"}>
                            <Link to="/" className={`dropdown-item`}>Показати все</Link>
                            {categorylist.map((category) => {
                                return <Allcats temp1={category} key={category.id} catID={catID} />
                            })}
                        </div>
                    </div>
                    <h3 className="catalog__products-summ">Знайдено товарів: <span id="view-count-products">6</span></h3>
                </div>

                <div className="catalog__content" id="catalog-products">
                    {
                        (catalogue == 'Not found')
                            ? <h2>Catalogeu is not found</h2>
                            : catalogue.map(element => <CardProdcut element={element} key={element.id} />)
                    }
                </div>
            </div>
        </div >
    );
}
