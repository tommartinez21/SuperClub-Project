const express = require("express");
const session = require("express-session");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const cartRoutes = require("./routes/cart");
const productRoutes = require("./routes/product");
const checkoutRoutes = require("./routes/checkout");
const indexRoutes = require("./routes/index");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.set("views", "src/views");

//routes

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "superclub-secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/", indexRoutes);

app.use("/register", registerRoutes);

app.use("/login", loginRoutes);

app.use("/checkout", checkoutRoutes);

app.use("/cart", cartRoutes);

app.use("/product", productRoutes);

app.get("*", (req, res) =>
  res.status(404).render("pages/error", { title: "404 !" })
);

app.listen(PORT, () => console.log("toy ready"));
