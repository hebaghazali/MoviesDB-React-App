import axiosInstance from '../../axiosConfig';

export default function getMovies(pageNum) {
  return dispatch => {
    axiosInstance
      .get('/movie/popular?&page=' + pageNum)
      .then(res => dispatch({ type: 'GET_MOVIES', payload: res.data.results }))
      .catch(err => console.log(err));
  };
}

export function getFilteredMovies(valueFilter) {
  return dispatch => {
    if (valueFilter) {
      axiosInstance
        .get('/search/movie?&query=' + valueFilter)
        .then(res =>
          dispatch({ type: 'FILTER_MOVIES', payload: res.data.results })
        )
        .catch(err => console.log(err));
    }
  };
}
