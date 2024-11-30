const express = require("express");
const path = require("path");
const fs = require("fs");

// Correctly resolve the path to the image
const imagePath = path.join(__dirname, "images", "logoGrocery.png");

// Import Controllers
const cartController = require("./controller/cartController");
const specialDealsController = require("./controller/specialDealsController");

// Initialize Express App
const app = express();
const PORT = 3007;

// Set View Engine and Views Directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view")); // Ensure "view" directory is structured correctly

// Serve Static Files (CSS, Images)
app.use("/css", express.static(path.join(__dirname, "../css")));
app.use("/images", express.static(path.join(__dirname, "/images")));

fs.readFile(imagePath, (err, data) => {
  if (err) {
    console.error("Error reading the image:", err);
    return;
  }
  console.log("Image read successfully!");
});

// Routes
// Home Page
app.get("/", (req, res) => {
  res.render("index", { title: "NiceShopping - Home" });
});

// Login Page
app.get("/login", (req, res) => {
  res.render("login", { title: "NiceShopping - Login/Signup" });
});

// Settings Page
app.get("/settings", (req, res) => {
  res.render("settings", { title: "NiceShopping - Settings" });
});

// Cart Page
app.get("/cart", cartController.getCart);

// Special Deals Page
app.get("/special-deals", specialDealsController.getSpecialDeals);

// Handle 404 Errors for Undefined Routes
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

// Start Server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
