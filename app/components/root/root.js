import './root.scss';

import React from 'react';
import {connect} from 'react-redux';

import Movies from '../movies/movies';
import NowPlaying from '../nowPlaying/nowPlaying';
import SetBySearch from '../setbysearch/setbysearch';
import TMDB from '../../core/tmdb';
import ShortQuery from '../shortquery/shortquery';
import WatchList from '../WatchList/WatchList';

class Root extends React.Component {

  constructor() {
    super();

    this.handleGenres = this.handleGenres.bind(this);
    this.handleNowPlaying = this.handleNowPlaying.bind(this);
    this.getMoviesbyGenres = this.getMoviesbyGenres.bind(this);
    this.getNowPlayingMovies = this.getNowPlayingMovies.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.getMoviesBySearchQuery = this.getMoviesBySearchQuery.bind(this);
    this.shortQuery = this.shortQuery.bind(this);
    
    this.state = {
      loading: false
    }
  }

  getMoviesBySearchQuery(searchQuery) {
    this.setState({
      loading: true
    });
    TMDB.get(`/search/movie?query=${searchQuery}`)
      .then((data) => {
      console.info('result by search?', data);
        this.setState({
          loading: false
        });

        this.props.setBySearch(data.results);
      });
  }

  getNowPlayingMovies() {
    this.setState({
      loading: true
    });

    TMDB.get('/movie/now_playing?')
      .then((data) => {
        this.setState({
          loading: false
        });

        this.props.setNowPlaying(data.results);
      });
  }

  getMoviesbyGenres() {
    this.setState({
      loading: true
    });

    TMDB.get('/genre/movie/list')
      .then((data) => {
        this.setState({
          loading: false
        });

        this.props.setGenres(data.genres);
      });
  }

  handleGenres(e) {
    this.getMoviesbyGenres();
  }

  handleNowPlaying(e) {
    this.getNowPlayingMovies();
  }

  searchSubmit(event) {
    event.preventDefault();
    let searchQuery = this.search.value;
    this.getMoviesBySearchQuery(searchQuery);
  }

  shortQuery(event) {
    console.info(event.target.value);

    this.setState({
      loading: true
    });

    TMDB.get(`/search/movie?query=${event.target.value}`)
      .then((data) => {
      console.info(data);
        this.setState({
          loading: false
        });

        this.props.setShortQuery(data.results);
      });
  }

  render() {
    console.info(this.props.mode);
    return (
      <div className="root">
        {/*<Topbar history={this.props.history}/>*/}
        {/*<Switch>*/}
          {/*<Route path="/explore" component={Explore}/>*/}
          {/*<Route exact path="/playlists" component={Playlists}/>*/}
        {/*</Switch>*/}


        {/*<h1 className="root-heading"*/}
            {/*onClick={ this.handleGenres }>*/}
          {/*Get Movies by Genres,*/}
        {/*</h1>*/}

        <form className="search-div" onSubmit={this.searchSubmit}
              onChange={ this.shortQuery}>
          <i type="submit" className="fa fa-search search-font" aria-hidden="true"/>
          <input ref={(search) => this.search = search}
                 type="search"
                 className="input-search"
                 placeholder="SEARCH"/>
        </form>

        {/*<h1 className="root-heading">*/}
          {/*Or Search Yourself:</h1>*/}
        <h1 className="root-heading"
            onClick={ this.handleNowPlaying }>NOW IN THEATERS</h1>


        {/*<p>Fetched movies: { this.props.movies.length }</p>*/}

        { this.state.loading && 'Loading...' }
        <NowPlaying />
        <ShortQuery />


      </div>
    );
  }
}

function mapStateToProps({movies}) {
  return {
    movies: movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setGenres(data) {
      dispatch({
        type: 'SET_MOVIES',
        data: data
      });
    },
    setNowPlaying(data) {
      dispatch({
        type: 'SET_NOW_PLAYING',
        data: data
      });
    },
    setBySearch(data) {
      dispatch({
        type: 'SET_BY_SEARCH',
        data: data
      });
    },
    setShortQuery(data) {
      dispatch({
        type: 'SHORT_QUERY',
        data: data
      });
    },
    addMovieToWatchlist(movie) {
      dispatch({
        type: 'ADD_MOVIE',
        addedMovie: movie
      });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);

