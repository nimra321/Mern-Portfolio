const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use Gmail as the email service
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail email address
    pass: process.env.GMAIL_PASSWORD, // Your Gmail password or app-specific password
  },
});

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: 'Please Provide all Fields',
      });
    }

    // Create the email message
    const mailOptions = {
      from: "nimrajahangir421@gmail.com", // Sender's email address
      to: "nimrajahangir421@gmail.com", // Recipient's email address
      subject: 'Regarding Mern Portfolio App',
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send({
          success: false,
          message: 'Error sending email',
          error,
        });
      }

      return res.status(200).send({
        success: true,
        message: 'Message sent successfully',
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Send Email API Error',
      error,
    });
  }
};

module.exports = { sendEmailController };
