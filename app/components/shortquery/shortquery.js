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

        return <li key={ movie.id }>{ movie.title }</li>
        console.info(movie);
        return <li key={ movie.id }>{ movie.title }
          <button onClick={this.props.addMovieToWatchlist}/>
        </li>
      }) }
    </ul>
  }


  render() {
    if (!this.props.shortquery.length) {
      return null;
    }

    return (
      <div className="movies">
        <h2>RELATED RESULTS SO FAR:</h2>
        { this.renderShortQuery() }
      </div>
    );
  }
}

function mapStateToProps({shortquery}) {
  return {
    shortquery: shortquery
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
