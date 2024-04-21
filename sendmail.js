const nodemailer = require('nodemailer');

// Replace with your actual email address (not recommended to store directly in code)
const senderEmail = process.env.SENDER_EMAIL;

exports.handler = async (event, context) => {
  const data = await event.body;
  const { name, email, subject, message } = JSON.parse(data);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server details
    port: 587, // or 465 for SSL
    secure: false, // or true for SSL
    auth: {
      user: senderEmail,
      pass: process.env.SENDER_EMAIL_PASSWORD, // Store password securely using environment variables
    },
  });

  const mailOptions = {
    from: senderEmail,
    to: 'nandaaritra@gmail.com', // Replace with recipient email
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return {
      statusCode: 200,
      body: 'Email sent successfully!',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: 'Error sending email.',
    };
  }
};
