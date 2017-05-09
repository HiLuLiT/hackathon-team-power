export default function watchListData(curentWatchList = [], action) {

    if (action.type === 'ADD_MOVIE') {
        const newList = [...curentWatchList];
        newList.push(action.addedMovie);
        return newList
    }

    if (action.type === 'FIRST_LOAD_MOVIES') {
        return action.loadSavedMovies;
    }

    if (action.type === 'REMOVE_MOVIE') {
        const newList = [...curentWatchList];
        for (let i in curentWatchList) {
            if(curentWatchList[i].id===action.movieToEarse.id){
                newList.splice(i,1);
                return newList
            }
        }
        newList.push(action.addedMovie);
        return newList
    }


    return curentWatchList;
}
