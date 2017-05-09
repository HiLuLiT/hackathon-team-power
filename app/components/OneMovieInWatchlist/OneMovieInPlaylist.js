import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid'
import './OneMovieWatchlist.css'


class OneMovieInWatchList extends React.Component {


    render(){
        return <div className="one-movie-info-holder">
                <img src={'https://image.tmdb.org/t/p/w300/'+this.props.movieInfo.poster_path} className="movie-poster"/>
                <p className="one-movie-title">{this.props.movieInfo.title}</p>
            </div>

    }

}


export default connect()(OneMovieInWatchList);