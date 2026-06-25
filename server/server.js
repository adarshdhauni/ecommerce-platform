require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("@exortek/express-mongo-sanitize");
const hpp = require("hpp");

const errorHandler = require("./middlewares/errorHandler.js");

const Product = require("./models/product.js");

const contactRoute = require("./routes/contactRoute.js");
const subscriptionRoute = require("./routes/subscriptionRoute.js");
const userRoutes = require("./routes/userRoutes.js");
const shippingRoutes = require("./routes/shippingRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes.js");
const wishlistRoutes = require("./routes/wishlistRoutes.js");
const adminRoutes = require("./routes/adminRoute.js");
const seedRoutes = require("./routes/seedRoutes.js");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: [process.env.CLIENT_URL, process.env.CLIENT_PREVIEW_URL],
    credentials: true,
  }),
);

app.use(express.json({ limit: "10kb" }));

app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(helmet());

app.use(
  mongoSanitize({
    replaceWith: "_",
  }),
);

app.use(
  hpp({
    whitelist: ["category", "gender"],
  }),
);

app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", contactRoute);
app.use("/api", subscriptionRoute);
app.use("/api", shippingRoutes);
app.use("/api", paymentRoutes);
app.use("/api", orderRoutes);
app.use("/api", wishlistRoutes);
app.use("/api", reviewRoutes);
app.use("/api", adminRoutes);
if (process.env.NODE_ENV === "development") {
  app.use("/api", seedRoutes);
}

app.use((req, res, next) => {
  const error = new Error("Invalid route, please try again!");
  error.statusCode = 404;
  next(error);
});

app.use(errorHandler);

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Database connected successfully");

    app.listen(port, () => {
      console.log("🚀 Server running on port " + port);
    });
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
}

startServer();
