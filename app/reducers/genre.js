const initialData = [];

export default function setMoviesByGenreReducer(data = initialData, action) {
  if (action.type === 'SET_MOVIES_BY_GENRE') {
    return action.data;
  }

  return data;
}
