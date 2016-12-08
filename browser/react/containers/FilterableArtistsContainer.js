import React from 'react';
import { connect } from 'react-redux';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

class FilterableArtistsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({
      inputValue: ''
    }, this.props.artists);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.list.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { artists: state.artists };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterableArtistsContainer);
