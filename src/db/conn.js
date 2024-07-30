require('dotenv').config()
const mongoose = require('mongoose')
const password = process.env.PASSWORD

mongoose.connect(`mongodb+srv://sahayush89:tC1Fs8fj31FJ0ehQ@cluster0.c1sz97z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then( () => {
    // console.log('Connection to database successful')
})
.catch( (err) => {
    console.log('Error in making database connection' + err)
})