const express = require('express')
const app = express()
var cors = require('cors')
const data = require('./model/dataBase')

app.use(express.json())

app.use(cors())

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  const { id, title, value } = req.body
  data.movieScore(id, title, value)
  res.json('oi')
})

app.listen(3003, console.log(`Porta 3003`))