import { useContext } from "react";
import { ShopContext } from "../context";

export function BasketItem(props) {
    const {id,
           name,
           price,
           quantity,
        } = props;
    
        const {deleteFromBasket, addItem, removeItem} = useContext(ShopContext);
       

    return <li className="collection-item">
        {name} <i className="material-icons clickable" onClick={() => removeItem(id)} >remove</i> 
        x{quantity} <i className="material-icons clickable" onClick={() => addItem(id)} >add</i>
         = {price * quantity} NTD 
        
        
        <span onClick={() => deleteFromBasket(id)} className="secondary-content"><i className="material-icons basket-delete">close</i></span>
        </li>
}  