import React , { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import erro from '../image/error404-not-found.gif';
import loading from '../image/loading-buffering.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './k.css'
import HoverRating from '../components/Rating';


function MoviesDetails(props) {
    const [movieinformation, setmovieinformation] = useState( { genres: [], title:"", tagline:"", release_date:"", poster_path:"", overview:"", vote_average: 0 })
    const { pathname } = useLocation();
    let history = useHistory();
    const id = pathname.split('/')[1];

  useEffect(() => {
    function requisitionMovieInformation() {
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=pt-BR`
        ).then((response) => {setmovieinformation(response.data);console.log(response);})
        .catch((error) =>  {setmovieinformation('Houve algum erro na pagina. Tente novamente mais tarde.');
        console.error(error)});
      }
      requisitionMovieInformation()
    }, [id])


    if (movieinformation === 'Houve algum erro na pagina. Tente novamente mais tarde.') 
    return (
    <> 
    <h1 className="App-header">{ movieinformation }</h1>
    <img  src={ erro } width={'100%'} alt={'erro na pagina'} />
    
    </>
  )
      
  return (
    <>
        {movieinformation === undefined ? 
        <img src={ loading } className='loading' alt={'carregando'} /> :
        <> 
          <Container className="container" style={{marginTop:'10px'}}>
            <Row className="justify-content-md-center">
              <Col xs lg="2" style={{ width:'100px', marginLeft:'-50px', marginRight:'100px', marginTop:'10px'}}>
              <div style={{cursor: "pointer"}} onClick={() => history.push(`/`)}>
                <h5>Voltar</h5>
              </div> 
              </Col>
                <Col ><img alt="Movie Cover" src={ `https://image.tmdb.org/t/p/w400${movieinformation.poster_path}` } /></Col>
                <Col >
                  <Card  style={{ width: '25rem', height:'60%',marginTop:'30px',  marginBottom:'auto'}}>
                    <Card.Body style={{paddingTop:'30px'}}>
                      <Card.Title><strong>{movieinformation.title}</strong></Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">   {movieinformation.tagline}</Card.Subtitle>
                      <Card.Text>{`${movieinformation.overview}`}</Card.Text>
                      <Card.Text>{`Genero:${movieinformation.genres.map((e) => ` ${e.name}`)}`}</Card.Text>
                      <Card.Text>
                        {`Data de Lançamento ${movieinformation.release_date.split('-').reverse().join('/')}`}
                      </Card.Text>
                    </Card.Body>
                    <HoverRating />
                  </Card>
                </Col>
            </Row>
          </Container>
        </>
        }
    </>
  )
}

export default MoviesDetails

