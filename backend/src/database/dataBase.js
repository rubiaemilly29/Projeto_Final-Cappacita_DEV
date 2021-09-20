const {databaseConnection} = require('./connection')

async function movieScore(score) {
    

const a = `INSERT INTO Capacita(idMovie, title_movie, rating_score) VALUES('${score.idMovie}', '${score.title_movie}', '${score.rating_score}')`
const result = await databaseConnection.raw(a)

if(result) {
    return {
    idMovie: score.idMovie,
    title_movie: score.title_movie,
    rating_score: score.rating_score,
    }
}else{
    console.error('deu erro');
}

}
module.exports={
    movieScore,
}