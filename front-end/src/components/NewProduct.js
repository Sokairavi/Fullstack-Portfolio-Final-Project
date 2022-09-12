import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function NewProduct() {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        rating: 0,
        category: "",
        image: "",
    });

    const handleTextChange = (e) => {
        setProduct({ ...product, [e.target.id]: e.target.value });
    }

    const addProduct = (newProduct) => {
        axios
          .post(`${API}/products`, newProduct)
          .then(
            () => { navigate(`/products`);},
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };


    const handleNumberChange = (e) => {
        setProduct({ ...product, [e.target.id]: Number(e.target.value) });
    }
 
    // const addProduct = (newProduct)=> {
    //     axios.post(`${API}/products`, newProduct)
    //         .then(() => {
    //             navigate("/products")
    //         }).catch((error) => {
    //             console.log(error)
    //             throw error;
    //         })
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        addProduct(product);
      };

      
    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // axios.post(`${API}/products`, product)
    //     //     .then(() => {
    //     //         navigate("/products")
    //     //     }).catch((error) => {
    //     //         console.log(error)
    //     //         throw error;
    //     //     })
    //     addProduct(product)
    // }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Product Name:</label>
                <input 
                    id="name"
                    type="text" 
                    value={product.name}
                    onChange={handleTextChange}
                    placeholder="Name of product..."
                    required
                />
                <label htmlFor="description">Product Category and Description:</label>
                <span> Pick a category and description: </span>
                <select id="description" type="text" onChange={handleTextChange}>
                    <option>--choose suggestion--</option>
                    <option value="A beautiful Hindu God or Goddess plushie for you!">Hindu Toys</option>
                    <option value="Ayurveda products are organic, natural, and good for your body and spirit">Ayurveda</option>
                    <option value="Beautiful and unique products to help you with all your Hindu ritual needs">Hindu Rituals</option>
                    <option value="Use this beautiful Yoga product to bend your body to health!">Yoga</option>
                    <option value="Beautiful Hindu jewelry to bring abundance in your life and increase your frequency">Hindu Jewelry</option>
                    <option value="Traditional clothing for temple and everyday wear">Hindu Clothing</option>
                    <option value="Hand carved brass, silver, gold, and marble Hindu deities for your home or altar">Hindu Deities</option>
                    <option value="Ancient spiritual Hindu scriptures that fill you with powerful cognitions so that you can live a powerful life">Hindu Texts</option>
                 </select>
                <textarea 
                    id="description"
                    type="text" 
                    value={product.description}
                    onChange={handleTextChange}
                ></textarea>
                <label htmlFor="price">Price:</label>
                <input 
                    id="price"
                    type="number"
                    value={product.price}
                    onChange={handleNumberChange}
                />
                <label htmlFor="rating">Rating 1-5:</label>
                <input 
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={product.rating}
                    onChange={handleNumberChange}
                />
                
                <label htmlFor="image">image URL:</label>
                <input 
                    id="image"
                    type="text"
                    value={product.image}
                    onChange={handleTextChange}
                    placeholder="https://"
                />
                <input type="submit" />
            </form>
            <Link to={`/products`}>
                <button className="button">Cancel</button>
            </Link>
        </div>
    )
}