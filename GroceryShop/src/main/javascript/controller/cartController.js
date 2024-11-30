exports.getCart = (req, res) => {
  res.render("cart", {
    title: "NiceShopping - Cart",
    cartItems: [
      { name: "Item 1", quantity: 2, price: 20 },
      { name: "Item 2", quantity: 1, price: 15 },
    ],
  });
};
