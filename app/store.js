import { compose, createStore, combineReducers } from 'redux';
import persistState from 'redux-localstorage'

import movies from './reducers/movies';
import nowplaying from './reducers/nowPlaying';
import setbysearch from './reducers/setbysearch';
import genre from './reducers/genre';
import watchListData from './reducers/watchListData';
import shortquery from './reducers/shortquery';
import { applyMiddleware } from 'redux';

const config = {
    key: 'MOVIES',
    slicer: () => (state) => ({watchListData: state.watchListData}),
    deserialize: (state) => JSON.parse(state),
};
const storeEnhancers = compose(persistState(null, config));

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
    {},
    storeEnhancers
);

export default store;
