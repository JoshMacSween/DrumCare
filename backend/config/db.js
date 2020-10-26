const mongoose = require('mongoose')

const connectDB = async () => {
  await mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log('MongoDB Connection Successful.')
      } else {
        console.log('Error in DB connection: ' + err)
      }
    }
  )
}

module.exports = connectDB
