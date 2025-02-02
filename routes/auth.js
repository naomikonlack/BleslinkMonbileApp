const bcrypt = require('bcrypt');
const express = require('express');
const pool = require('../db');
const router = express.Router();

// Signup Endpoint
router.post('/signup', async (req, res) => {
  const { full_name, email, phone_number, password, role } = req.body;

  try {
    // Validate inputs
    if (!full_name || !email || !password || !role) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const query = `
      INSERT INTO users (full_name, email, phone_number, password_hash, role)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING user_id, full_name, email, role, created_at
    `;
    const values = [full_name, email, phone_number, passwordHash, role];
    const result = await pool.query(query, values);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: result.rows[0],
    });
  } catch (err) {
    console.error('Error during signup:', err.message);

    // Handle duplicate email or phone_number
    if (err.code === '23505') {
      return res.status(409).json({ success: false, message: 'Email or phone number already exists' });
    }

    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
