export default function moviesDetailsReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_MOVIES_DETAILS':
      return action.payload;
    default:
      return state;
  }
}
