let getStorageCart = () => {
  let storedCartStr = localStorage.getItem("cart");
  if (storedCartStr) {
    return JSON.parse(storedCartStr);
  }
  return [];
};

let saveCartToLs = (cart) => {
  let CartSrt = JSON.stringify(cart);
  localStorage.setItem("cart", CartSrt);
};

let addToLs = (id) => {
  const cart = getStorageCart();
  cart.push(id);
  saveCartToLs(cart);
};

let removeFromLs = id =>{
    const cart = getStorageCart();
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLs(remaining);

}

export { addToLs, getStorageCart, removeFromLs };
