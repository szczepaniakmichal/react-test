import React from 'react';
import actions from '../actions'; // webpack by default gets index.js

import SongDetail from "./SongDetail";
import SongList from "./SongList";

import '../sass/app.scss'

export default function App() {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column four wide">
                    <SongDetail />
                </div>
            </div>

        </div>
    );
}