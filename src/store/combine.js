import { combineReducers } from 'redux';
import moviesReducer from './reducers/movies';
import moviesDetailsReducer from './reducers/moviesDetails';
import favoritesReducer from './reducers/favorites';

export default combineReducers({
  moviesReducer: moviesReducer,
  moviesDetailsReducer: moviesDetailsReducer,
  favoritesReducer: favoritesReducer,
});
