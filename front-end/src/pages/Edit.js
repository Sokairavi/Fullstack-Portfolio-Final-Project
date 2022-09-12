import React from "react";
import EditProduct from "../components/EditProduct";

function Edit() {
    return (
        <div>
            <h4>
                Edit an existing product here!
                <br />
                Price must be at least $1 and Ratings between 0-5.
            </h4>
            <EditProduct />    
        </div>
        
    )
}

export default Edit;