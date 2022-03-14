require('dotenv').config()

const { default: mongoose } = require('mongoose')

const conectionString = process.env.MONGO_DB_URI

mongoose.connect(conectionString)
  .then(() => {
    console.log('Database conected')
  }).catch(err => {
    console.log(err)
  })
