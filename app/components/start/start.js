import Root from '../root/root';
import React from 'react';
import WatchList from '../WatchList/WatchList'

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
    if(this.state.mode==='first'){
      this.setState ({
        mode: 'search'
      })
    }
    if(this.state.mode==='search'){
      this.setState ({
        mode: 'playlist'
      })
    }
    if(this.state.mode==='playlist'){
      this.setState ({
        mode: 'search'
      })
    }
  }


  render() {
    return (
      <div>
        <div className="click-start" onClick={ this.renderRoot }>
          {/*<i className="fa fa-plus plus-in-circle" aria-hidden="true"/>*/}
          { this.state.initialized ? 'yes' : 'no' }
        </div>
        <h1>Create A Movie Wishlist with your friends</h1>

        { this.state.mode==='search' && <Root /> }
        { this.state.mode==='playlist'&& <WatchList /> }

      </div>
    )
  }
}

