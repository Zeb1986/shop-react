import { GoodsItem } from "./GoodsItem";

export function GoodsList (props) {
    const {goods = [], addToBasket = Function.prototype} = props;

    if(!goods.length) {
                return <h3>Nothing Here</h3>
            }

    return  <div className="goods">            
            {goods.filter(item => item.price > 0).slice(0,20).map(item => {
                return <GoodsItem key={item.id} {...item} addToBasket={addToBasket}/>
            })}
        </div>
}