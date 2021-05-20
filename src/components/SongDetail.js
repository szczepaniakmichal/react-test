import React, { Component } from "react";
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    // console.log("props in songDetail", props)

    if (!song) {
        return <div>Select a song</div>
    }

    const { title, duration } = song;
    return (
        <>
            <div>Song datails</div>
            <div>Title: {title}</div>
            <div>Duration: {duration}</div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);


// import React, { Component } from "react";
// import { connect } from 'react-redux';
//
// class SongDetail extends Component {
//     render() {
//         // const { duration } = this.props;
//
//         const title = this.props.selectedSong && this.props.selectedSong.title;
//         const duration = this.props.selectedSong && this.props.selectedSong.duration;
//
//         return (
//             <>
//                 <div>Song datails</div>
//                 <div>Title: {title}</div>
//                 <div>Duration: {duration}</div>
//             </>
//         )
//     }
// };
//
// const mapStateToProps = (state) => {
//     console.log("state w song datail", state);
//     return {
//         selectedSong: state.selectedSong
//     }
// }
//
// export default connect(mapStateToProps)(SongDetail);