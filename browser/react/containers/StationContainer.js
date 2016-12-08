import { connect } from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player';

const genreSongs = function (songsArray, genreName) {
  return songsArray.filter(song => song.genre === genreName).map(convertSong);
};

const mapStateToProps = (state, ownProps) => {
  return {
    genreName: ownProps.params.genreName,
    songs: genreSongs(state.songs, ownProps.params.genreName),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggle: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Station);
