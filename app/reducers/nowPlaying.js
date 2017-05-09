const initialData = [];

export default function nowPlayingReducer(data = initialData, action) {
  if (action.type === 'SET_NOW_PLAYING') {
    return action.data;
  }

  return data;
}
