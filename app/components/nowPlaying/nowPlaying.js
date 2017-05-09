import React from 'react';
import { connect } from 'react-redux';

class NowPlaying extends React.Component {

  constructor() {
    super();

    this.state = {
      loading: false
    }
  }

  renderNowPlaying() {
    return <ul>
      { this.props.nowplaying.map((movie) => {
        console.info(movie);
        return <li key={ movie.id }>{ movie.title }</li>
      }) }
    </ul>
  }


  render() {
    if (!this.props.nowplaying.length) {
      return null;
    }

    return (
      <div className="movies">
        <h2>Choose From Now Playing</h2>
        { this.renderNowPlaying() }
      </div>
    );
  }
}

function mapStateToProps({ nowplaying }) {
  return {
    nowplaying: nowplaying
  };
}

export default connect(mapStateToProps)(NowPlaying);
