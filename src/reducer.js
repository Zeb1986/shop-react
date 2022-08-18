export function reducer(state, {type, payload}) {
    switch(type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id)
            let newOrder = null;
        if (itemIndex<0) {
            const newItem = {
            ...payload,
            quantity: 1
        }
        newOrder = [...state.order,newItem]
        } else {
            newOrder = state.order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem
                }
            })
        }
        return {
            ...state,
            order: newOrder,
            alertName: payload.name
        }
        }
        case 'ADD_ITEM':
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.id === payload.id) {
                       return {...el, quantity: el.quantity + 1}
                    } else {
                        return el
                    }
                })
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                order: state.order.map(el => {
                    if (el.id === payload.id) {
                        if (el.quantity === 1) {
                            return el
                        }
                       return {...el, quantity: el.quantity - 1}
                    } else {
                        return el
                    }
                })
            }
        case 'DELETE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter(el => {return el.id !== payload.id})
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketVisible: !state.isBasketVisible,
            }
        default:
            return state
    }
}