const nodemailer = require('nodemailer')

async function mailer(body) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'DrumCareYEG@gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USR,
      pass: process.env.GMAIL_PASS,
    },
  })

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"DrumCareYEG@gmail.com"', // sender address inquiry.email
      to: 'DrumCareYEG@gmail.com', // list of receivers
      subject: 'Customer Inquiry', // Subject line
      text: body, // plain text body
      html: '<b>Hello world?</b>', // html body
    })
    console.log('Message sent: %s', info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (err) {
    console.log(err.message)
  }
}

// main().catch(console.error)

module.exports = { mailer }
