import { connect } from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = (state, ownProps) => {
  return {
    albums: state.albums.list
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
