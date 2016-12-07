import { connect } from 'react-redux';
import Station from '../components/Station';
import connected from './StationsContainer';

console.log(connected());

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Station);
