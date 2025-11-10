const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample users
const users = [
  { id: 1, name: 'Sabina', email: 'sabina@gmail.com' },
  { id: 2, name: 'Saba', email: 'saba@gmail.com' },
  { id: 3, name: 'Sad', email: 'sad@gmail.com' },
];

// Routes
app.get('/', (req, res) => res.send('User Management server is running'));
app.get('/user', (req, res) => res.json(users));

// Start Server
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
