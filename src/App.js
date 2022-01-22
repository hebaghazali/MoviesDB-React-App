import { Route, Switch, Redirect } from 'react-router-dom';
import GuardedRoute from 'react-guarded-route';

import Movies from './components/movies';
import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';

import './App.css';
import MovieDetails from './components/moviesDetails';
import Favorites from './components/favorites';
import { LanguageProvider } from './contexts/languageContext';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en');

  const validatorFunction = () => {
    return true;
  };

  return (
    <>
      <Switch>
        <LanguageProvider value={{ lang, setLang }}>
          <Navbar />
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
        </LanguageProvider>
      </Switch>
      ;
    </>
  );
}

export default App;
