const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const wishlistRoutes = require('./routes/wishlistRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
const connectDB = require('./config/db');
connectDB();

// Routes
app.use('/api/wishlist', wishlistRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});