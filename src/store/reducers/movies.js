export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case 'GET_MOVIES':
    case 'FILTER_MOVIES':
      return action.payload;
    default:
      return state;
  }
}
