import Root from '../root/root';
import React from 'react';
import WatchList from '../WatchList/WatchList'
import '../start/start.css'
export default class Start extends React.Component {

  constructor() {
    super();
    this.state = {
      initialized: false,
      mode: 'first'
    }

    this.renderRoot = this.renderRoot.bind(this);
  }

  renderRoot() {
    this.setState({
      initialized: true
    });
    if (this.state.mode === 'first') {
      this.setState({
        mode: 'search'
      })
    }
    if (this.state.mode === 'search') {
      this.setState({
        mode: 'playlist'
      })
    }
    if (this.state.mode === 'playlist') {
      this.setState({
        mode: 'search'
      })
    }
  }

  handleHeader() {
    
    if (this.state.mode === 'first') {

      return  <h1 className="start-header">Create A Movie Wishlist With Your Friends
        <span className="start-span">(press the purple button)</span>
      </h1>
    }
    if (this.state.mode === 'search') {
      return  <h1 className="start-header">Add Some Movie
        <span className="start-span">Or Press To See Your List!</span>
        </h1>
    }
    if (this.state.mode === 'playlist') {
      return  <h1 className="start-header">Exit To Add More Movies
      </h1>
    }
  }

  render() {
    const classNameVal = this.state.mode ==='playlist' ? 'playlist' :'wish-watch' ;

    return (
      <div>
        <header>
          <h1 className="app-header">WISHWATCH</h1>
        </header>
        <div className={`click-start ${classNameVal}`} onClick={ this.renderRoot }>

        </div>

        { this.handleHeader() }
        { this.state.mode === 'search' && <Root /> }
        { this.state.mode === 'playlist' && <WatchList />}

      </div>
    )
  }
}

