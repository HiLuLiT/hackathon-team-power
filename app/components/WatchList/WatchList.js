import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid'
import OneMovieInWatchList from '../OneMovieInWatchlist/OneMovieInPlaylist'

import './WatchList.css'

class WatchList extends React.Component {


    earseFromWatchlist(movie){

    }

    createFirstPlayList() {
        const savedWatchlist = this.props.savedWatchList;

        if (savedWatchlist.length === 0) {
            return (
                <li>
                    <p className="empty-list-title">Why won't you add a movie</p>
                </li>
            )
        }
        else {
            return savedWatchlist.map((movieInfo)=>{
                return <li key={uuid()} className="one-movie-holder">
                <OneMovieInWatchList movieInfo={movieInfo}/>
                    <div className="tinting-movies-on-hover">
                        <span className="erase-movie"
                                onClick={(e) => this.earseFromWatchlist(movie)}
                        />

                    </div>
                </li>
               // return <li key={uuid()} className="one-movie-holder">
               //      <div className="one-movie-info-holder">
               //          <img src={'https://image.tmdb.org/t/p/w300/'+movieInfo.poster_path} className="movie-poster"/>
               //          <p className="one-movie-title">{movieInfo.title}</p>
               //      </div>
               //  </li>
            });
            
            // for (let oneMovie of savedWatchlist) {
            //     createdWatchList.push(this.addMovieLi(oneMovie));
            //     console.info(oneMovie);
            // }
            // console.info(createdWatchList);
            // return createdWatchList;
        }

    }

    // addMovieLi(movieInfo) {
    //     return (
    //         <li key={movieInfo.id}>
    //             <div>
    //                 <img src={movieInfo.poster_path} className="movie-poster"/>
    //                 <p>{movieInfo.title}</p>
    //             </div>
    //         </li>
    //     )
    // }

    componentDidUpdate() {
        // console.info('check',this.props.savedWatchList);
        // if(this.props.savedWatchList.length===0){
        //     this.createFirstPlayList()
        // }
    }


    render() {
        return (
            <div>
                <ul className="watchlist-holder">
                    {this.createFirstPlayList()}
                </ul>
            </div>
        )
    }

}


function mapStateToProps({watchListData}) {
    return {
        savedWatchList: watchListData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getWatchlist() {
            dispatch({
                type: 'GET_WATCHLIST',
            });
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WatchList);