import { connect } from 'react-redux';
import Artist from '../components/Artist';

const mapStateToProps = (state, ownProps) => {
  console.log("STATE", state);
  console.log("OWN PROPS", ownProps);
  return {
    player: state.player,
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





// import React, {Component} from 'react';
// import store from '../store';
// import Artist from '../components/Artist';

// import {toggleSong} from '../action-creators/player';

// export default class extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {

//     return (
//       <Artist
//         {...this.state.player}
//         selectedArtist={this.state.artists.selected}
//         toggleOne={this.toggle}
//         children={this.props.children.props.children} />
//     );
//   }

// }
