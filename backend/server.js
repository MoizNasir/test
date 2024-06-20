const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware setup
app.use(express.json()); // Parse incoming JSON requests

// Database connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB:', err.message);
// });

// Routes
// const usersRouter = require('./routes/users'); // Example route file
// app.use('/api/users', usersRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
