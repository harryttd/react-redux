import { connect } from 'react-redux';
import AUDIO from '../audio';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';

const mapStateToProps = (state, ownProps) => {
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    next: function(){
      dispatch(next())
    },
    prev: function() {
      dispatch(previous())
    },
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    },
    setProgress: function() {
      // AUDIO.addEventListener('ended', this.next);
      AUDIO.addEventListener('timeupdate', () => {
      dispatch(setProgress(AUDIO.currentTime / AUDIO.duration))
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);






// import React, {Component} from 'react';
// import store from '../store';

// export default class extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().player;
//     this.toggle = this.toggle.bind(this);
//   }

//   componentDidMount() {

    // AUDIO.addEventListener('ended', this.next);
    // AUDIO.addEventListener('timeupdate', () => {
    //   store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
    // });

//     // this.unsubscribe = store.subscribe(() => {
//     //   this.setState(store.getState().player);
//     // });
//   }

//   // componentWillUnmount() {
//   //   this.unsubscribe();
//   // }

//   next() {
//     store.dispatch(next());
//   }

//   prev() {
//     store.dispatch(previous());
//   }

//   toggle() {
//     store.dispatch(
//       toggleSong(this.state.currentSong, this.state.currentSongList)
//     );
//   }

//   render() {
//     return <Player
//       {...this.state}
//       next={this.next}
//       prev={this.prev}
//       toggle={this.toggle}
//     />;
//   }

// }
