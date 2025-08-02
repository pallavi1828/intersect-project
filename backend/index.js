const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API Endpoint to handle contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // send to self
    subject: `New Contact Form Submission from ${name}`,
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending message');
  }
});

// Health check route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
