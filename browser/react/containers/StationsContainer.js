import { connect } from 'react-redux';
import Stations from '../components/Stations';

const SongsToStations = function (songsArray) {
    let genres = {};
    songsArray.forEach(song => {
      const genre = song.genre;
      genres[genre] = genres[genre] || [];
      genres[genre].push(song);
    });

    return genres;
};

const mapStateToProps = (state) => {
  return {
    stations: SongsToStations(state.songs)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
