import React from 'react';
import {connect} from 'react-redux';
import TMDB from '../../core/tmdb';

import SetByGenre from '../setbygenre/setbygenre';

class Movies extends React.Component {

  constructor() {
    super();

    this.state = {
      loading: false
    }

    this.getGenreList = this.getGenreList.bind(this);
  }

  getGenreList(genreID) {
    console.info(genreID);
    this.setState({
      loading: true
    });

    TMDB.get(`/discover/movie?with_genres=${genreID}`)
      .then((data) => {
      console.info('whats in DATA?', data);
        this.setState({
          loading: false
        });

        this.props.setGenre(data.results);
      });
  }

  renderGenreList() {
    return <ul>
      { this.props.movies.map((movie) => {
        return <li key={ movie.id }
                   onClick={ () => this.getGenreList(movie.id) }
                   className="genre-li">{ movie.name }</li>
      }) }
      <SetByGenre />
    </ul>
  }


  render() {
    if (!this.props.movies.length) {
      return null;
    }

    return (
      <div className="movies">
        <h2>Choose Genres</h2>
        { this.renderGenreList() }
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
    setGenre(data) {
      dispatch({
        type: 'SET_MOVIES_BY_GENRE',
        data: data
      });
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
