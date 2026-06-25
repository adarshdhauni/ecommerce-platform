const express = require("express");
const { seedProducts } = require("../seed/seedProducts.js");
const adminOnly = require("../middlewares/isAdmin.js");
const protect = require("../middlewares/isAuth.js");

const router = express.Router();

router.post("/seed/products", seedProducts);

module.exports = router;
