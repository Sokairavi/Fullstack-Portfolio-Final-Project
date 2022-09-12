import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
 
// import child component
import Product from "./Product";
import Cart from "./Cart";
import ProductLocal from "./ProductLocal"; 

const API = process.env.REACT_APP_API_URL;
 
function Products() {
   const [products, setProducts] = useState([]);
   const [cartArr, setcartArr] = useState([]);
   const [subtotal, setSubtotal] = useState([]);
 
 
   useEffect(() => {
       axios
         .get(`${API}/products`)
         .then((res) => {
           setProducts(res.data);
           console.log(products)
         })
         .catch((err) => {
           console.error(err);
         });
     }, [products]);
 
   const handleAddToCart=(product)=>{
       setcartArr([...cartArr, product]);
       setSubtotal(subtotal + product.price);
     }
 
    
     let cartItems = cartArr.map((product)=>{
       return (
           <li key={product.id}>
               { product.name }: ${ product.price }
           </li>
       )
     })
 
   return (
       <div className="products">
           <div className="cart-container">
               <Cart cartItems={cartItems} subtotal={subtotal} />
           </div>
 
           {products.map((product) => {
               if (product.image.substring(0,8) === "https://") {
                   return (
                       <div className="product-overview">
                           <Product key={product.id} product={product} />
                           <div className="addToCartButton">
                               <button type="submit" onClick={()=>handleAddToCart(product)}>Add To Cart</button>
                           </div>
                       </div>
                   )
               } else {
                   return (
                       <div className="product-overview">
                           <ProductLocal key={product.id} product={product} />
                           <div className="addToCartButton">
                               <button type="submit" onClick={()=>handleAddToCart(product)}>Add To Cart</button>
                           </div>
                       </div>
                   )
               }
           }
       )}
       </div>
   )
};
 
export default Products;
