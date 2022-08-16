export function Cart(props) {
    const {quantity = 0, handleBasket = Function.prototype} = props;
    return <div className="cart blue darken-4 white-text" onClick={handleBasket} >
        <i className="material-icons">shopping_cart</i>
        {quantity? <span className="cart-qantity">{quantity}</span>: null}
    </div>
}