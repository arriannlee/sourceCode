const express = require('express')
const app = express()
const PORT = 1234
const mongoClient = require('mongodb').MongoClient

// mongoClient.connect(connectionString, (err,client)=>{
//   'mongodb+srv://source:<Fastercar1.>@cluster0.lhguv6p.mongodb.net/'
// })

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log('check its working')
})
