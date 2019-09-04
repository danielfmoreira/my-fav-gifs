import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Gif } from './GifContainer';

type state = {
  searchResults: Gif[],
}

export default class GifSearch extends Component<{}, {}> {

  state = {
    searchResults: []
  }

  render() {
    return <Typeahead options={this.state.searchResults} />
  }
}