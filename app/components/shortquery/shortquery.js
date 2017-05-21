import React from 'react';
import { connect } from 'react-redux';

import uuid from 'uuid'
import OneMovieInWatchList from '../OneMovieInsearh/OneMovieInsearh'
import './shortquery.css'
class ShortQuery extends React.Component {

  constructor() {
    super();

    this.state = {
      loading: false,
        page: 1
    }
  }


    saveToWatchlist(movie) {
        this.props.addMovieToWatchlist(movie);
        // window.localStorage.setItem('savedWatchList', JSON.stringify(this.props.showMovies))
    }

  renderShortQuery() {
    return <ul className="short-query-holder">
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


    pagination(direction,e) {
        if (direction === 'up') {

          this.props.shortQuery(e, this.state.page + 1);
            this.setState({page: this.state.page+1});
        }
        else {
            this.props.shortQuery(e, this.state.page - 1);
            this.setState({page: this.state.page-1});
        }
    }

  render() {
      const disablePrevBtn = this.state.page === 1;
      const disableNextBtn = this.state.page === 4;

    if (!this.props.shortquery.length) {
      return null;
    }

    return (
      <div className="movies-by-query">
        <h2 className="search-results"> Search Results</h2>
        { this.renderShortQuery() }
        <div className="pagination-hoolder">
          <button className="page-btn"
                  disabled={disablePrevBtn}
                  onClick={ (e) => this.pagination('down',e)}>Prev
          </button>
          <button className="page-btn"
                  disabled={disableNextBtn}
                  onClick={ (e) => this.pagination('up',e)}>Next
          </button>
        </div>
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
