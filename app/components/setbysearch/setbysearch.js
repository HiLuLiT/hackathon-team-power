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

        return <li key={ movie.id }>{ movie.title }
            <button onClick={()=>{this.props.addMovieToWatchlist(movie);
            //window.localStorage.setItem('savedWatchList', JSON.stringify(this.props.showMovies))
            }}>Add movie</button>
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

function mapStateToProps({ setbysearch, watchListData  }) {
  return {
    setbysearch: setbysearch,
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

export default connect(mapStateToProps, mapDispatchToProps)(SetBySearch);
