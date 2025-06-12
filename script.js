function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("เพิ่มสินค้าแล้ว: " + product);
}