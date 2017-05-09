import React from 'react';
import { connect } from 'react-redux';

class ShortQuery extends React.Component {

  constructor() {
    super();

    this.state = {
      loading: false
    }
  }

  renderShortQuery() {
    return <ul>
      { this.props.shortquery.map((movie) => {
        return <li key={ movie.id }>{ movie.title }
          <button onClick={()=>{this.props.addMovieToWatchlist(movie);
            window.localStorage.setItem('savedWatchList', JSON.stringify(this.props.showMovies))
          }}>Add movie</button>
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
