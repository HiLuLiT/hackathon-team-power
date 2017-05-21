import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid'
import OneMovieInWatchList from '../OneMovieInsearh/OneMovieInsearh'
import './nowPlaying.css'


class NowPlaying extends React.Component {

    constructor() {
        super();

        this.state = {
            loading: false,
            page: 1
        }
    }


    saveToWatchlist(movie) {
        this.props.addMovieToWatchlist(movie);
        window.localStorage.setItem('savedWatchList', JSON.stringify(this.props.showMovies))
    }

    renderNowPlaying() {

        return (
            <ul className="in-theater-holder">
                { this.props.nowplaying.map((movie) => {

                    return <li key={uuid()} className="one-movie-holder">
                        <OneMovieInWatchList movieInfo={movie}/>
                        <div className="tinting-movies-on-hover3">
                            <button value="ADD TO WISHLIST" className="add-to-watchlist-btn3"
                                    onClick={(e) => this.saveToWatchlist(movie)}
                            >ADD TO WISHLIST
                            </button>
                        </div>
                    </li>


                    //<li key={ movie.id }>{ movie.title }</li>
                }) }
            </ul>
        )
    }

    pagination(direction) {
        if (direction === 'up') {
            this.props.handleNowPlaying('&page=' + this.state.page + 1);
            this.setState({page: this.state.page +1});
        }
        else {
            this.props.handleNowPlaying('&page=' + this.state.page - 1);
            this.setState({page: this.state.page-1});
        }
    }

    render() {

        const disablePrevBtn = this.state.page === 1;
        const disableNextBtn = this.state.page === 4;
        return (
            <div className="now-playing">
                <h2 className="now-playing-header"> Now Playing In Theaters</h2>
                { this.renderNowPlaying() }
                <div className="pagination-hoolder">
                    <button className="page-btn"
                            disabled={disablePrevBtn}
                            onClick={ () => this.pagination('down')}>Prev
                    </button>
                    <button className="page-btn"
                            disabled={disableNextBtn}
                            onClick={ () => this.pagination('up')}>Next
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps({nowplaying, watchListData}) {
    return {
        nowplaying: nowplaying,
        showMovies: watchListData,
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

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
