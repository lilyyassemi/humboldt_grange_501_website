const express = require('express');
const nodemailer = require('nodemailer');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  try {
    await pool.query(
      'INSERT INTO subscribers (email) VALUES ($1) ON CONFLICT DO NOTHING',
      [email]
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'smilegiver15@gmail.com',
      subject: '🆕 New Subscriber!',
      text: `Someone subscribed with this email: ${email}`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Error in POST /subscribe:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
