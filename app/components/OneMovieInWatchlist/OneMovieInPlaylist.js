import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid'
import './OneMovieInWatchlist.css'
import TMDB from '../../core/tmdb';

class OneMovieInWatchList extends React.Component {

  constructor() {
    super();
    this.state = {
      genres: []
    }
  }

  handleYear() {
    const year = this.props.movieInfo.release_date;
    return year.slice(0, 4)
  }

  getGenreList() {
    const genreID = this.props.movieInfo.genre_ids;
    const firstGenre = genreID[0];

    TMDB.get('/genre/movie/list')
      .then((data) => {
        this.props.setGenres(data.genres);
      });

    // for (let genre of data.genre) {
    //   if (genre.id === firstGenre) {
    //     console.info('found a match', genre.name);
    //   }
    // }
  }

  // handleGenre() {
  //   const genreID = this.props.movieInfo.genre_ids;
  //   for (const id of genreID) {
  //
  //   }
  // }

    removeMovie(){

        this.props.removeOnemovie(this.props.movieInfo);
       // window.localStorage.setItem('savedWatchList', JSON.stringify(this.props.showMovies));
    }

    componentWillUpdate(){
      console.info('checking');

    }

  render() {
    this.getGenreList()
    return <div className="one-movie-info-holder movie-in-playlist">

      <img src={'https://image.tmdb.org/t/p/w300/' + this.props.movieInfo.poster_path} className="movie-poster"/>
      <div className="tinting-movies-on-hover5">
        <i className="icon-cancel-circle cancel-icon"
           onClick={() => this.removeMovie()}/>
      </div>
      <p className="one-movie-title movie-in-playlist-title">{this.props.movieInfo.title}</p>
      <span className="date">({ this.handleYear()})</span>
      <span className="overview">{this.props.movieInfo.overview}</span>
      <div className="icon-div">


        <div className="imdb-div">
          <i className="fa fa-imdb imdb-icon" aria-hidden="true"/>
          <span className="imdb-span">More Info</span>
        </div>

        <div className="heart-div">
          <i className="fa fa-heart-o heart-icon" aria-hidden="true"/>
          <span className="heart-span">2 likes</span>
        </div>

        <div className="camera-div">
          <i className="icon-video-camera camera-icon"/>
          <span className="camera-span">Watch</span>
        </div>
      </div>
    </div>

  }

}


function mapStateToProps({ setbysearch, watchListData  }) {
    return {
        setbysearch: setbysearch,
        showMovies:watchListData,
    };
}

function mapDispatchToProps(dispatch) {
  return {
    removeOnemovie(movie) {
      dispatch({
        type: 'REMOVE_MOVIE',
        movieToEarse: movie,
      });
    },
    setGenres(data) {
      dispatch({
        type: 'SET_MOVIES',
        data: data
      });
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(OneMovieInWatchList);