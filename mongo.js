const mongoose = require('mongoose')

const password = process.argv[2]

const url = `mongodb+srv://db_user_sampo:${password}@cluster0.clseoj4.mongodb.net/noteApp?appName=Cluster0`
mongoose.set('strictQuery', false)
mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})