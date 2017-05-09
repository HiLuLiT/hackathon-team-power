import { createStore, combineReducers } from 'redux';

import movies from './reducers/movies';
import nowplaying from './reducers/nowPlaying';
import setbysearch from './reducers/setbysearch';
import genre from './reducers/genre';
import watchListData from './reducers/watchListData';
import shortquery from './reducers/shortquery';

const reducer = combineReducers({
  movies,
  nowplaying,
  setbysearch,
  genre,
  shortquery,
  watchListData,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
