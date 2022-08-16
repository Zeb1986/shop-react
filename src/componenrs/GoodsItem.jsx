export function GoodsItem(props) {
    const {id,
           name,
           description,
           price,
           images,
           addToBasket = Function.prototype
     } = props;

    return <div className="card" id={id}>
    <div className="card-image">
      <img src={images.icon} alt={name}/>
    </div>   
    <div className="card-content">
      <span className="card-title #42a5f5 blue-text text-lighten-1">{name}</span>
      <p>{description}</p>
    </div>
    <div className="card-action">
          <button className="btn" onClick={() => addToBasket({
            id,
            name,
            price
          })} >Buy</button>
          <span className="right" >{price} NTD</span>
        </div>
  </div>
}
