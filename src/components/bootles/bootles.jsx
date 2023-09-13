import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/bottle";
import "./bottles.css";
import { addToLs, getStorageCart, removeFromLs } from "../utils/local";
import Cart from "../../cart/cart";

const Bottles = () => {
  let [bottles, setBottles] = useState([]);
  let [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bootles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    let storedCart = getStorageCart();
    let savedCart = [];
    for (let id of storedCart) {
      console.log(id);
      const bottle = bottles.find((bottle) => bottle.id === id);
      if (bottle) {
        savedCart.push(bottle);
      }
    }
  }, [bottles]);

  let handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLs(bottle.id);
  };

  let handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromLs(id);
  };

  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottles-con">
        {bottles.map((bottle) => (
          <Bottle
            handleAddToCart={handleAddToCart}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
