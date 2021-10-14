const knex = require("knex");
const databaseConnection = require('./connection')

async function movieScore(id, title, value) { console.log(typeof value);
    await databaseConnection('Rating').insert({idMovie: id, title_movie: title, rating_score: value})
}
module.exports={
    movieScore,
}