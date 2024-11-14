import { ProductCard } from "./components/ProductCard";

const products = [
  {
    id: 0,
    category: "Category 1",
    name: "Product 1",
    price: 100,
    img: "https://static.vecteezy.com/system/resources/previews/021/608/795/non_2x/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg",
  },
  {
    id: 1,
    category: "Category 2",
    name: "Product 2",
    price: 300,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vxiLY7Gt-gd3yaWynZV75kQWjqVK2YRLNg&s",
  },
]
function App() {
  return (
    <div className="products-wrapper">
      {products.map((product)=>(
        <ProductCard data={product} id={1}/>
      ))}

    </div>
  );
}

export default App;
