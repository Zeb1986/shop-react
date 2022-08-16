import { useState ,useEffect } from "react"
import { API_URL} from '../config'
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

export function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketVisible, setBasketVisible] = useState(false);
    const [alertName, setAlertName] = useState('');

    useEffect(function getGoods() {
        fetch(API_URL, {headers: { 'Authorization' : '99d0d63f-45c47bf8-9b6b966e-f5cf0a96' }})
        .then(response => response.json())
        .then(data => {data.items && setGoods(data.items); setLoading(false); } )
    }, []);

    const handleBasket = () => {
        setBasketVisible(!isBasketVisible)
    }
    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex<0) {
            const newItem = {
            ...item,
            quantity: 1
        }
        setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder);
        }
        setAlertName(item.name)
    }
    const deleteFromBasket = (itemId) => {
        setOrder(order.filter(el => {return el.id !== itemId}))
    }
    const addItem = (itemId) => {
        const added = order.map(el => {
            if (el.id === itemId) {
               return {...el, quantity: el.quantity + 1}
            } else {
                return el
            }
        })
        setOrder(added)
    }
    const removeItem = (itemId) => {
        const removed = order.map(el => {
            if (el.id === itemId) {
                if (el.quantity === 1) {
                    return el
                }
               return {...el, quantity: el.quantity - 1}
            } else {
                return el
            }
        })
        setOrder(removed)
    }
    const closeAlert = () => {
        setAlertName('')
    }

    return <main className="container content" >
        <Cart quantity={order.length} handleBasket={handleBasket} />
        {loading? <Preloader/>: <GoodsList goods ={goods} addToBasket={addToBasket}/>}
        {isBasketVisible && <BasketList 
        order = {order} 
        handleBasket={handleBasket} 
        deleteFromBasket={deleteFromBasket} 
        addItem={addItem}
        removeItem={removeItem}
        />}
        { alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
};