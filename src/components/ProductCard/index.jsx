import "./index.css"
export function ProductCard(props){
    const { img, category,name,price}=props.data;

    return(
        <div className="product-card">
            <div className="container_upper">
                <img className="product-card__image" width = {200} src={img} alt="" />
                <span className="cat">{category}</span>
                <h4>{name}</h4>
            </div>
            <div className="container_lower">
                <span><p>${price}</p></span>
                <button>Add to cart</button>
            </div>
        </div>
    );
}
