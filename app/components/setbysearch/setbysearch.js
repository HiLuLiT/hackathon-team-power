import React from 'react';
import { connect } from 'react-redux';

class SetBySearch extends React.Component {

  constructor() {
    super();

    this.state = {
      loading: false
    }
  }

  renderBySearchSubmit() {
    return <ul>
      { this.props.setbysearch.map((movie) => {
        console.info(movie);
        return <li key={ movie.id }>{ movie.title }
          <button onClick={this.props.addMovieToWatchList}></button>
        </li>
      }) }
    </ul>
  }


  render() {
    if (!this.props.setbysearch.length) {
      return null;
    }

    return (
      <div className="movies">
        <h2>Choose From Search Results</h2>
        { this.renderBySearchSubmit() }
      </div>
    );
  }
}

function mapStateToProps({ setbysearch }) {
  return {
    setbysearch: setbysearch
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

export default connect(mapStateToProps, mapDispatchToProps)(SetBySearch);
