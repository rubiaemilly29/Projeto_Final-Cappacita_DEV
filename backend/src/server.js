const express = require('express')
const app = express()
const data = require('./database/dataBase')
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/Rating', function (req, res) {
  const ranking = data.movieScore({
    idMovie: req.score.idMovie,
    title_movie: req.score.title_movie,
    rating_score: req.score.rating_score,
  })
  res.send(ranking)
})

app.listen(3003)