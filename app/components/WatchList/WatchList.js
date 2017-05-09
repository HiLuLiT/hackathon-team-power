import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid'
import OneMovieInWatchList from '../OneMovieInWatchlist/OneMovieInPlaylist'

import './WatchList.css'

class WatchList extends React.Component {


  createFirstPlayList() {
    const savedWatchlist = this.props.savedWatchList;

    if (savedWatchlist.length === 0) {
      return (
        <li >
          <p className="empty-list-title">Why won't you add a movie</p>
        </li>
      )
    }
    else {
      return savedWatchlist.map((movieInfo) => {
        return <li key={uuid()} className="one-movie-holder">
          <OneMovieInWatchList movieInfo={movieInfo}/>
        </li>
      });
    }

  }

  render() {
    return (
      <div className="watchlist">
        <ul className="watchlist-holder playlist-holder">
          {this.createFirstPlayList()}
        </ul>
      </div>
    )
  }

}


function mapStateToProps({watchListData}) {
  return {
    savedWatchList: watchListData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getWatchlist() {
      dispatch({
        type: 'GET_WATCHLIST',
      });
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WatchList);