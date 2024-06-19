// server.js

// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint to handle form submissions
app.post('/api/contact', async (req, res) => {
    try {
        // Get form data from request body
        const { firstName, lastName, email, phoneNumber, message } = req.body;

        // Create transporter for sending emails (replace with your email service details)
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // Using environment variable for email user
                pass: process.env.EMAIL_PASS // Using environment variable for email password
            }
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER, // Replace with your email address
            to: 'recipient@example.com', // Replace with recipient email address
            subject: 'New Message from Contact Form',
            html: `
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Response back to client
        res.status(200).send('Message sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending message. Please try again later.');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
