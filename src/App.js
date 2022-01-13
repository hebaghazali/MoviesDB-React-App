import { Route, Switch, Redirect } from 'react-router-dom';

import Movies from './components/movies';
import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';

import './App.css';
import MovieDetails from './components/moviesDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/movies' component={Movies} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/movies-details/:id' component={MovieDetails} />
        <Redirect from='/' to='/movies' />
      </Switch>
      ;
    </div>
  );
}

export default App;
