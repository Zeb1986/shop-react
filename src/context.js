import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketVisible: false,
    alertName: '',
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }
    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload:item})
    }
    value.addItem = (itemId) => {
        dispatch({type: 'ADD_ITEM', payload:{id:itemId}})
    }
    value.removeItem = (itemId) => {
        dispatch({type: 'REMOVE_ITEM', payload:{id:itemId}})
    }
    value.deleteFromBasket = (itemId) => {
        dispatch({type: 'DELETE_FROM_BASKET', payload:{id:itemId}})
    }
    value.handleBasket = () => {
        dispatch({type: 'TOGGLE_BASKET'})
    }
    value.setGoods = (data) => {
        dispatch({type:'SET_GOODS', payload: data})
    }
    
    return <ShopContext.Provider value={value} >
        {children}
    </ShopContext.Provider>
}