import { connect } from 'react-redux';
import Album from '../components/Album';
import { toggleSong } from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
