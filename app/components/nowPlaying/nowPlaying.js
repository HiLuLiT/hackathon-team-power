import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid'
import OneMovieInWatchList from '../OneMovieInsearh/OneMovieInsearh'
import './nowPlaying.css'


class NowPlaying extends React.Component {

    constructor() {
        super();

        this.state = {
            loading: false
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


    render() {


        return (
            <div className="movies">
                <h2> Now Playing In Theaters</h2>
                { this.renderNowPlaying() }
            </div>
        );
    }
}

function mapStateToProps({nowplaying, watchListData}) {
    return {
        nowplaying: nowplaying,
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

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
