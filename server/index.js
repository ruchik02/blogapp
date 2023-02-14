// server.js
const express = require('express');
const app = express();
const cors=require('cors');
const port= process.env.PORT || 8080;
require("./database");
require("dotenv").config();
const userRoutes = require("./user");
const authRoutes =require('./auth');
app.use(express.json());
app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.listen(port, () => {
  console.log('Server running on port 8000');
});