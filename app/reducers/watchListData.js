export default function watchListData(curentWatchList = [], action) {

    if (action.type === 'ADD_MOVIE') {
        const newList = [...curentWatchList];
        newList.push(action.addedMovie);
        return newList
    }

    if (action.type === 'FIRST_LOAD_MOVIES') {
        return action.loadSavedMovies;
    }

    return curentWatchList;
}
