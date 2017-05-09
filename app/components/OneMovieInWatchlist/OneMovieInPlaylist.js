import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid'
import './OneMovieInWatchlist.css'

class OneMovieInWatchList extends React.Component {


  render() {
    console.info(this.props.movieInfo);
    return <div className="one-movie-info-holder">

      <img src={'https://image.tmdb.org/t/p/w300/' + this.props.movieInfo.poster_path} className="movie-poster"/>
      <span>Realse Date: {this.props.movieInfo.release_date}</span>
      <p className="one-movie-title">{this.props.movieInfo.title}</p>
      <p>{this.props.movieInfo.overview}</p>
      <i className="fa fa-imdb" aria-hidden="true"/>
      <i className="fa fa-heart-o" aria-hidden="true"/>
      <i className="icon-video-camera"/>
    </div>

  }

}


export default connect()(OneMovieInWatchList);