import Footer from '../components/Footer';
import Movies from '../components/Movies';
import tmdb from '../image/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'

function MovieHome() {
    return (
        <div>
            <header className="App-header">
        <div><img alt='the movies db' src={tmdb} width='120px'/></div>
      </header>
        <Movies />
        <Footer />
        </div>
    )
}

export default MovieHome
