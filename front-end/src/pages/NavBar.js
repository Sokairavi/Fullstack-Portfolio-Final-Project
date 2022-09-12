import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/"><h1>The Hindu Spirituality Store ॐ </h1></Link>
            <div className="nav-button">
                <Link to="/products"><button>All Products</button></Link>
                <Link to="/products/new"><button>New Product</button></Link>
            </div>
        </nav>
    )
}

export default NavBar;