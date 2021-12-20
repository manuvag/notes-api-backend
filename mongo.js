const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI

mongoose.connect(connectionString)
  .then(() => {
    console.log('Database conected')
  }).catch(err => {
    console.log(err)
  })

// Note.find({}).then(result => {
// console.log(result)
// mongoose.connection.close()
// })

// const note = new Note({
// content: 'MongoDB es increible',
// date: new Date(),
// important: true
// })

// note.save()
// .then(result => {
// console.log(result)
// mongoose.connection.close()
// }).catch(error => {
// console.log(error)
// })
