import { connect } from 'react-redux';
import Artist from '../components/Artist';
import { toggleSong } from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    progress: state.player.progress,
    selectedArtist: state.artists.selected,
    children: ownProps.children.props.children
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
