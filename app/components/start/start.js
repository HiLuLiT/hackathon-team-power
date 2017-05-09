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


  render() {
    return (
      <div>
        <header>
          <h1 className="wish-watch">WISHWATCH</h1>
        </header>
        <div className="click-start" onClick={ this.renderRoot }>
          {/*<div className="line">*/}
            {/*<div className="line-copy"></div>*/}
          {/*</div>*/}

        </div>
        <h1 className="start-header">Create A Movie Wishlist with your friends
          <span className="start-span">(press the purple button)</span>
        </h1>

        { this.state.mode === 'search' && <Root /> }
        { this.state.mode === 'playlist' && <WatchList />}

      </div>
    )
  }
}

