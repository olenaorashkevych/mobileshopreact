import React, { useEffect, useState } from 'react'
import CardProdcut from './CardProdcut'


export default function Hotoffers() {

    const [first, setfirst] = useState([])


    async function getoffers() {
        const resp = await fetch("https://667a796bbd627f0dcc8f205a.mockapi.io/products?hotoffer=yes",)
        const respjson = await resp.json()
        setfirst(respjson)
    }

    useEffect(() => {
        getoffers()
    }, [])


    return (
        <div className="hot-offers" id="hot-offers">
            <div className="container">

                <h2 className="hot-offers__title title-square">
                    <span className="title-square__icon">
                        <svg className="icon icon-fire">
                            <use href="#icon-fire"></use>
                        </svg>
                    </span>
                    <span className="title-square__small">Акційні пропозиції!</span>
                    <span className="title-square__main">Гарячі пропозиції</span>
                </h2>

                <div className="hot-offers__cards">

                    {first.map(element => {
                        return <CardProdcut element={element} sdfsdfs="sdfdsfd" key={element.id} />
                    })}

                </div>

            </div>
        </div>
    )
}
