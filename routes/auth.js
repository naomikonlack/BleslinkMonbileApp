const express = require('express');
const pool = require('../db');
const router = express.Router();

// Fetch all users
router.get('/users', async (req, res) => {
  try {
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    res.status(200).json({
      success: true,
      users: result.rows,
    });
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
    });
  }
});

module.exports = router;
