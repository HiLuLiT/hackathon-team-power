
import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid'
import './OneMovieInsearh.css'


class OneMovieInWatchList extends React.Component {


    render(){
        return <div className="one-movie-info-holder2">
            <img src={'https://image.tmdb.org/t/p/w300/'+this.props.movieInfo.poster_path} className="movie-poster2"/>
            <p className="one-movie-title2">{this.props.movieInfo.title}</p>
        </div>

    }

}


export default connect()(OneMovieInWatchList);