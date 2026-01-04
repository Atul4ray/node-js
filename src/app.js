const express = require("express");
const bookRoutes = require("./routes/book.routes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/books", bookRoutes);

module.exports = app;
