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
            loading: false,
            inputState:"",
        }
    }

  getMoviesBySearchQuery(searchQuery) {
    this.setState({
      loading: true
    });
    TMDB.get(`/search/movie?query=${searchQuery}`)
      .then((data) => {
        // console.info('result by search?', data);
        this.setState({
          loading: false
        });
        this.props.setBySearch(data.results);
      });
  }

  getNowPlayingMovies(pageNumber) {
    this.setState({
      loading: true
    });

        TMDB.get(`/movie/now_playing?${pageNumber}`)
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

  handleNowPlaying(pageNumber) {
    this.getNowPlayingMovies(pageNumber);
  }

  searchSubmit(event) {
    event.preventDefault();
    let searchQuery = this.search.value;
    this.getMoviesBySearchQuery(searchQuery);
  }

  shortQuery(event, pageNumber) {
    this.setState({
      loading: true
    });
    const searchType= pageNumber === 1? event.target.value:this.state.inputState;
      console.info(`/search/movie?query=${searchType}&page=${pageNumber}`);
    TMDB.get(`/search/movie?query=${searchType}&page=${pageNumber}`)
      .then((data) => {
        this.setState({
          loading: false
        });

        console.info(pageNumber);
        this.props.setShortQuery(data.results);
      });
  }

    componentDidMount() {
        this.getNowPlayingMovies('&page=1');
        if (window.localStorage.getItem('savedWatchList') && window.localStorage.getItem('savedWatchList')!== 'undefined') {
            this.props.loadSavedMovies(JSON.parse(window.localStorage.getItem('savedWatchList')));
    }
  }

    render() {
        return (
            <div className="root">
                <form className="search-div" onSubmit={this.searchSubmit}
                      onChange={ (e)=>this.shortQuery(e, 1)}>

                    <input ref={(search) => this.search = search}
                           type="search"
                           placeholder="SEARCH FOR A MOVIE..."
                           value={ this.state.inputState }
                           onChange={(e)=>(this.setState({inputState:e.target.value}))}
                    className="search-field"/>
                </form>

        { this.state.loading && '' }

                {this.state.inputState ==="" && <NowPlaying handleNowPlaying={this.handleNowPlaying}/>}
                {this.state.inputState !=="" && <ShortQuery shortQuery={this.shortQuery}/>}



      </div>
    );
  }
}

function mapStateToProps({movies, watchListData}) {
  return {
    movies: movies,
    savedWatchList: watchListData,

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
    loadSavedMovies(movie) {
      dispatch({
        type: 'FIRST_LOAD_MOVIES',
        loadSavedMovies: movie
      });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);

