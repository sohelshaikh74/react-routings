import { Link } from "react-router-dom";
import products from "../../products.json";
import "./Products.css";

const Products = () => {
  return (
    <div className="card">
      {products.map((product, index) => {
        return (
          <div className="card-items" key={index}>
            <img src={product.image} width="200px" height="200px" />
            <h2>{product.title}</h2>
            <p>Price : {product.price}</p>
            <button>
              <Link to={`/product/${product.id}`}>View More</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
