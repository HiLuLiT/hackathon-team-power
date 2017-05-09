
import React from 'react';
import {connect} from 'react-redux';

import './WatchList.css'

class WatchList extends React.Component{


    createFirstPlayList(){
        const savedWatchlist = this.props.movies;
        if(savedWatchlist.length===0){
            return (
                <li>
                    <p className="empty-list-title">Why won't you add a movie</p>
                </li>
            )
        }
        else{
            const createdWatchList =[]
            for (let oneMovie of savedWatchlist) {

            }
        }

    }



    render(){
        return(
            <div>
             <ul className="watchlist-holder">
                 {this.createFirstPlayList()}
             </ul>
            </div>
        )
    }

}



function mapStateToProps({movies}) {
    return {
        movies: movies
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