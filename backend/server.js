const express = require('express')
const inquiries = require('./inquiryData')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()

dotenv.config()
connectDB()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('API is running ')
})

app.get('/inquiry', (req, res) => {
  res.send(inquiries)
})

app.get('/inquiry/:id', (req, res) => {
  const inquiry = inquiries.find((i) => i._id === Number(req.params.id))
  res.json(inquiry)
})

app.post('/form', (req, res) => {

  const output = `
    <p>Customer Inquiry</p>
    <h3>Contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Number: ${req.body.phoneNumber}</li>
      <li>Preffered Date of Service: ${req.body.date}</li>
      <li>Kit Size: ${req.body.kitSize}</li>
      <li>Package: ${req.body.package}</li>
    </ul>
  `

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'drumcareyeg@gmail.com',
      pass: process.env.GMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  let info = transporter.sendMail({
    from: '"Drum Care" <drumcareyeg@gmail.com>',
    to: 'drumcareyeg@gmail.com',
    subject: 'Inquiry',
    text: 'Hello world?',
    html: output,
  })

})

const PORT = 5000

app.listen(PORT, console.log(`Server is listening on port ${PORT}`))
