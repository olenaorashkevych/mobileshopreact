import React, { useEffect, useState, useMemo, lazy, Suspense, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

const CardProdcut = lazy(() => import("./CardProdcut"));
const Allcats = lazy(() => import("./Allcats"));

export default function Catalog() {
    const [catalogue, setcatalogue] = useState([]);
    const [categorylist, setcategorylist] = useState([]);
    const [seecat, setseecat] = useState(false);
    const { catID } = useParams();

    const fetchData = async (url) => {
        const resp = await fetch(url);
        return resp.json();
    };

    const getDataFromBdForCatalog = useCallback(async () => {
        const url = catID ? `https://667a796bbd627f0dcc8f205a.mockapi.io/products?catid=${catID}` : "https://667a796bbd627f0dcc8f205a.mockapi.io/products";
        const data = await fetchData(url);
        setcatalogue(data);
    }, [catID]);

    const getcategoires = useCallback(async () => {
        const data = await fetchData("https://667a796bbd627f0dcc8f205a.mockapi.io/categories");
        setcategorylist(data);
    }, []);

    useEffect(() => {
        getDataFromBdForCatalog();
        getcategoires();
    }, [getDataFromBdForCatalog, getcategoires]);

    const renderProducts = useMemo(() => {
        return catalogue !== "Not found" ? catalogue.map((element) => <CardProdcut element={element} key={element.id} />) : <h2>Catalogue is not found</h2>;
    }, [catalogue]);

    const renderCategories = useMemo(() => {
        return categorylist.map((category) => <Allcats temp1={category} key={category.id} catID={catID} />);
    }, [categorylist, catID]);

    function showallcategories() {
        setseecat(!seecat);
    }

    return (
        <div className="catalog" id="catalog">
            <div className="container">
                <div className="catalog__header">
                    <div className={`catalog__select-category dropdown ${seecat ? "show" : ""}`}>
                        <h3 onClick={showallcategories} className="dropdown-btn">
                            Вибрати категорію
                        </h3>
                        <div className="dropdown-content">
                            <Link to="/" className="dropdown-item">
                                Показати все
                            </Link>
                            <Suspense fallback={<div>Loading categories...</div>}>{renderCategories}</Suspense>
                        </div>
                    </div>
                    <h3 className="catalog__products-summ">
                        Знайдено товарів: <span>{catalogue.length}</span>
                    </h3>
                </div>
                <div className="catalog__content" id="catalog-products">
                    <Suspense fallback={<div>Loading products...</div>}>{renderProducts}</Suspense>
                </div>
            </div>
        </div>
    );
}
