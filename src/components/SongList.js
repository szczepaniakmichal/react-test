import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div key={song.title}
                     className="item"
                >
                    <div className="right floated content">
                        <button className="ui button primary"
                                onClick={() => this.props.selectedSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render() {
        // this.props === { songs: state.songs }
       return (
           <div>
               <div className="ui divided list">{this.renderList()}</div>
               {/*{props.songs.map(song => (*/}
               {/*    <p>{song.title}</p>*/}
               {/*))}*/}
           </div>
       )
    }
};

const mapStateToProps = (state) => {
    // console.log("state", state);
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, {selectedSong: selectedSong})(SongList);

// export default connect(mapStateToProps)(SongList);
