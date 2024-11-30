exports.getSpecialDeals = (req, res) => {
  res.render("specialDeals", {
    title: "NiceShopping - Special Deals",
    likedItems: ["Item A", "Item B"],
    browsedItems: ["Item X", "Item Y"],
    purchasedItems: ["Item M", "Item N"],
  });
};
