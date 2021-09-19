import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MoviesDetails from './pages/MoviesDetails';
import MovieHome from './pages/MovieHome';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route
          exact
          path="/"
          render={ (props) => <MovieHome /> }
        />
        <Route
          exact
          path="/:Id"
          component={ MoviesDetails }
        />
        </Switch>
        </div>

  )
};

export default App;
