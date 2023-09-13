import "./bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  let { name, img, price, seller, stock, ratings } = bottle;
  return (
    <div className="bottle">
      <h3>{name}</h3>
      <img src={img} alt="" />
      <p>Price: ${price}</p>
      <p>Brand: {seller}</p>
      <p>Stock: {stock}</p>
      <p>Rattings: {ratings}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
