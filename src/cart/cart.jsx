import "./cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h3>Cart: {cart.length}</h3>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div key={bottle.id} className="cart-item">
            <img src={bottle.img} alt={bottle.name} />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
