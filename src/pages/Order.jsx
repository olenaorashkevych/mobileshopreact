import React, { useContext, useState } from "react";
import { Appcontex } from "../App";
import Ordernotempty from "../components/Ordernotempty";
import Orderempty from "../components/Orderempty";
import Ordersuccess from "../components/Ordersuccess";

function Order() {
    const { cart } = useContext(Appcontex);

    const [orderstatus, setorderstatus] = useState(false);

    if (orderstatus === true) {
        return (
            <div className="page-content page-content-order">
                <div className="container">
                    <Ordersuccess />
                </div>
            </div>
        );
    }

    return (
        <div className="page-content page-content-order">
            <div className="container">{cart.length === 0 ? <Orderempty /> : <Ordernotempty setorderstatus={setorderstatus} />}</div>
        </div>
    );
}

export default Order;
