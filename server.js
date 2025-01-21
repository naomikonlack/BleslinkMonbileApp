const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const app = express();
const PORT = 5001;

// Middleware
app.use(bodyParser.json());
app.use('/auth', authRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Bleslink Backend is Running!');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
