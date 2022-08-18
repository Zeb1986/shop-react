import { useContext } from "react";
import { ShopContext } from "../context";

export function Cart() {
    const {order, handleBasket = Function.prototype} = useContext(ShopContext);
    const quantity = order.length
    return <div className="cart blue darken-4 white-text" onClick={handleBasket} >
        <i className="material-icons">shopping_cart</i>
        {quantity? <span className="cart-qantity">{quantity}</span>: null}
    </div>
}