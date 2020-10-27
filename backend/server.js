const express = require('express')
const inquiries = require('./inquiryData')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const {mailer} = require('./mailers/mailer')
const exphbs = require('express-handlebars')

const app = express()

dotenv.config()
connectDB()

app.use(bodyParser.json())
app.engine('handlebars', exphbs())
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
  res.send('Inquiry Posted!')
  mailer(req.body)
  console.log("Posted!");
})




const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is listening on port 5000`))