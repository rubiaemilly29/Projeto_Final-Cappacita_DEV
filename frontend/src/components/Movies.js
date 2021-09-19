import React , { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import loading from '../image/loading-buffering.png';
import erro from '../image/error404-not-found.gif';
import './Movie.css'

function Movies(props) {
    const [movies, setmovies] = useState()
    let history = useHistory();
  useEffect(() => {
    function requisitionMovies() {
      axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
        ).then((response) => setmovies(response.data.results))
        .catch((error) => setmovies('Houve algum erro na pagina. Tente novamente mais tarde.'));
    }
    requisitionMovies()
  }, [])
  console.log(movies)
  
  if (movies === typeof(String)) 
  return (
  <> 
  <h1>{ movies }</h1>
  <img src={ erro } width={'100%'} alt={'erro na pagina'} />
  
  </>
  )
  return (
    <div className='movieRow--area'>
      <div className='movieRow--list'>
        {movies === undefined ? <img src={ loading } className='loading' alt={'carregando'} /> : 
        movies.map((movie) => 
        <div className='movieRow--item' key={ movie.id } onClick={() => history.push(`/${ movie.id }`)}>
          <img alt={movie.id} key={ movie.id } src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
        </div> 
        )}

      </div>
    </div>
  );
}

Movies.propTypes = {

}

export default Movies

