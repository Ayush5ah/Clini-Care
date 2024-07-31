require('dotenv').config()
const mongoose = require('mongoose')
const password = process.env.PASSWORD

mongoose.connect(`mongodb+srv://sahayush89:<password>@cluster1.9upb8xd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`)
.then( () => {
    console.log('Connection to database successful')
})
.catch( (err) => {
    console.log('Error in making database connection' + err)
})