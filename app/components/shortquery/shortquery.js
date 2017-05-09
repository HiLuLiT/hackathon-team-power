import React from 'react';
import { connect } from 'react-redux';

import uuid from 'uuid'
import OneMovieInWatchList from '../OneMovieInsearh/OneMovieInsearh'
import './shortquery.css'
class ShortQuery extends React.Component {

  constructor() {
    super();

    this.state = {
      loading: false
    }
  }


    saveToWatchlist(movie) {
        this.props.addMovieToWatchlist(movie);
        window.localStorage.setItem('savedWatchList', JSON.stringify(this.props.showMovies))
    }

  renderShortQuery() {
    return <ul>
      { this.props.shortquery.map((movie) => {


        return <li key={uuid()} className="one-movie-holder">
          <OneMovieInWatchList movieInfo={movie}/>
          <div className="tinting-movies-on-hover">
            <button value="ADD TO WISHLIST" className="add-to-watchlist-btn"
                    onClick={(e) => this.saveToWatchlist(movie)}
            >ADD TO WISHLIST
            </button>
          </div>
        </li>
      }) }
    </ul>
  }


  render() {
    if (!this.props.shortquery.length) {
      return null;
    }

    return (
      <div className="movies-by-query">
        { this.renderShortQuery() }
      </div>
    );
  }
}

function mapStateToProps({shortquery, watchListData}) {
  return {
    shortquery: shortquery,
      showMovies:watchListData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieToWatchlist(movie) {
      dispatch({
        type: 'ADD_MOVIE',
        addedMovie: movie
      });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortQuery);
