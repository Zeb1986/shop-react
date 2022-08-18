import { useContext } from "react";
import { ShopContext } from "../context";
import { BasketItem } from "./BasketItem";

export function BasketList() {
    const {order = [], 
           handleBasket,
        } = useContext(ShopContext);
    
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    },0)

    return <ul className="collection basket-list">
    <li className="collection-item active">
        Basket
        <span className="secondary-content">
        <i className="material-icons close-basket" onClick={handleBasket} >close</i></span></li>
    {order.length? order.map(item => {
       return <BasketItem key={item.id} {...item} />
    }):<li className="collection-item">Basket empty</li>}
    <li className="collection-item active">Total price: {totalPrice} NTD</li>
    <li className="collection-item">
    <button className="btn">Chekout</button>
    </li>
  </ul>
}