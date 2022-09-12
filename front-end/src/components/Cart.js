export default function Cart({ cartItems }) {
    
    return (
      <div>
        <div>
          <h3>Shopping Cart</h3>
          {cartItems.length === 0 ? (
            <span>Empty Cart. Add an item to the cart.</span>
          ) : (
            <ul>{cartItems}</ul>
          )}
      
          {/* <hr />
          <h2>Subtotal: { (subtotal) }</h2>
          <h2>Tax: { (subtotal * 0.05) }</h2>
          <h2>Total: { (subtotal * 1.05) }</h2> */}
        </div>
      </div>
    );
  }