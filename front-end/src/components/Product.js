import { Link } from "react-router-dom";

import setStars from "../helpers/setStars";

function Product({ product }) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <h2>{product.name}</h2>
        <img src={product.image} alt="text url" />
      </Link>
      <div>Rating: {setStars(product)}</div>
      <div>Price: ${product.price}</div>
      <div>Category: {product.category}</div>
    </div>
  );
}

export default Product;