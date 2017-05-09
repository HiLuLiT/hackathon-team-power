import React from 'react';
import { connect } from 'react-redux';

class SetByGenre extends React.Component {

  constructor() {
    super();

    this.state = {
      loading: false
    }
  }

  renderSelectedGenre() {
    console.info('kookoo');
    return <ul>
      { this.props.genre.map((movie) => {
        console.info(movie);
        return <li key={ movie.id }>{ movie.title }</li>
      }) }
    </ul>
  }


  render() {
    console.info(this.props.genre);
    if (!this.props.genre.length) {
      return null;
    }

    return (
      <div className="movies">
        <h2>{this.props.genre.name}</h2>
        { this.renderSelectedGenre() }
      </div>
    );
  }
}

function mapStateToProps({ genre }) {
  return {
    genre: genre
  };
}

export default connect(mapStateToProps)(SetByGenre);
