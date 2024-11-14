import "./index.css"
export function ProductCard(props){
    const { img, category,name,price}=props.data;

    return(
        <div className="product-card">
            <img width = {200} src={img} alt="" />
            <span>{category}</span>
            <h4>{name}</h4>
            <span>{price}</span>
        </div>
    );
}
