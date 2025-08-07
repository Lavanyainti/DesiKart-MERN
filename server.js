const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

// Routes
const UserRoute = require('./routes/userRoute');
const ProductRoute = require('./routes/productsRoute');
const profileRoute = require('./routes/profileRoute');
const CartRoute = require('./routes/cartRouter');
const ReviewRoute = require('./routes/reviewRoute');
const orderRoute = require('./routes/orderRoute');

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', UserRoute);
app.use('/api', ProductRoute);
app.use('/api', profileRoute);
app.use('/api', CartRoute);
app.use('/api', ReviewRoute);
app.use('/api', orderRoute);

// Serve React frontend
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Connect DB
mongoose.connect(process.env.DB_URL)
  .then(() => console.log("✅ DB connected successfully"))
  .catch(err => console.log("❌ DB Error:", err));

// Start server
const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`🚀 Server listening at port ${port}`);
});
