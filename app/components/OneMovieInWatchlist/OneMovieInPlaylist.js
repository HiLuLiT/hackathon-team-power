import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid'
import './OneMovieInWatchlist.css'

class OneMovieInWatchList extends React.Component {


  render() {
    console.info(this.props.movieInfo);
    return <div className="one-movie-info-holder movie-in-playlist">

      <img src={'https://image.tmdb.org/t/p/w300/' + this.props.movieInfo.poster_path} className="movie-poster"/>
      <div className="tinting-movies-on-hover5">
      <i className="icon-cancel-circle cancel-icon"
         onClick={()=>this.props.removeOnemovie(this.props.movieInfo)}/>
      </div>
      <p className="one-movie-title movie-in-playlist-title">{this.props.movieInfo.title}</p>
      <span className="date">Realse Date: {this.props.movieInfo.release_date}</span>
      <span className="overview">{this.props.movieInfo.overview}</span>
      <i className="fa fa-imdb" aria-hidden="true"/>
      <i className="fa fa-heart-o" aria-hidden="true"/>
      <i className="icon-video-camera"/>
    </div>

  }

}


function mapDispatchToProps(dispatch) {
    return {
        removeOnemovie(movie) {
            dispatch({
                type: 'REMOVE_MOVIE',
                movieToEarse:movie,
            });
        },
    }
}


export default connect(null, mapDispatchToProps)(OneMovieInWatchList);