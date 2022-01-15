import { Route, Switch, Redirect } from 'react-router-dom';
import GuardedRoute from 'react-guarded-route';

import Movies from './components/movies';
import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';

import './App.css';
import MovieDetails from './components/moviesDetails';
import Favorites from './components/favorites';

function App() {
  const validatorFunction = () => {
    return true;
  };

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/movies' component={Movies} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/movies-details/:id' component={MovieDetails} />
        <Redirect from='/' exact to='/movies' />

        <GuardedRoute
          path='/favorites'
          component={Favorites}
          redirectTo='/login'
          validatorFunction={validatorFunction()}
        ></GuardedRoute>
      </Switch>
      ;
    </div>
  );
}

export default App;
