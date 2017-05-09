

export default function watchListData(curentWatchList= [], action) {

    if(action.type === 'ADD_MOVIE'){
            const newList= [...curentWatchList];
            newList.push(action.addedMovie);
        return newList
    }

    return curentWatchList;
}
