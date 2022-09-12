import React from "react";
import NewProduct from "../components/NewProduct";

function New() {
    return (
        <div>
            <h4>
                Have a beautiful Hindu product to sell? Upload and submit new product here!
                <br/>
                Price must be at least $1 and Ratings between 0-5.
            </h4>
            <NewProduct />
        </div>
    )
}

export default New;