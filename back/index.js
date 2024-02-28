
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'edwinantony562@gmail.com',
    pass: 'uljl clfj adok xjwe'
  }
});

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;
const mailOptions = {
    from: 'chordify@india.com',
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send({ error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send({ message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
