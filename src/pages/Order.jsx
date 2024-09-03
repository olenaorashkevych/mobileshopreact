import React, { useContext } from "react";
import { Appcontex } from "../App";
import Ordernotempty from "../components/Ordernotempty";
import Orderempty from "../components/Orderempty";

function Order() {
    const { cart } = useContext(Appcontex);

    return (
        <div>
            <div className="page-content page-content-order">
                <div className="container">{cart.length === 0 ? <Orderempty /> : <Ordernotempty />}</div>
            </div>
        </div>
    );
}

export default Order;
