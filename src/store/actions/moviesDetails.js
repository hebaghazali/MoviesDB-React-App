import axiosInstance from '../../axiosConfig';

export default function getMoviesDetails(id) {
  return dispatch => {
    axiosInstance
      .get(`/movie/${id}?`)
      .then(res => {
        dispatch({ type: 'GET_MOVIES_DETAILS', payload: res.data });
      })
      .catch(err => console.log(err));
  };
}
