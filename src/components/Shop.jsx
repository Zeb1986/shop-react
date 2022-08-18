import { useEffect } from "react"
import { API_URL} from '../config'
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";
import { ShopContext } from "../context";
import { useContext } from "react";

export function Shop() {
    const {setGoods, loading, order, isBasketVisible, alertName} = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {headers: { 'Authorization' : '99d0d63f-45c47bf8-9b6b966e-f5cf0a96' }})
        .then(response => response.json())
        .then(data => {setGoods(data.items)} )
        //eslint-disable-next-line
    }, []);

    

    return <main className="container content" >
        <Cart quantity={order.length} />
        {loading? <Preloader/>: <GoodsList/>}
        {isBasketVisible && <BasketList/>}
        { alertName && <Alert/>}
    </main>
};