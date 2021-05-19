import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {title: 'Personal Jesus', duration: '3:25'},
        {title: 'Enter Sandman', duration: '5:32'},
        {title: 'Thunderstruckn', duration: '5:01'},
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})