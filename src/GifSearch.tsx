import React, { Component } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Gif } from './GifContainer';
import { searchGifs } from './giphyApi';

type state = {
  searchResults: Gif[],
  isLoading: boolean,
}

type Props = {
  onGifSelect: (gif: Gif) => void
}

export default class GifSearch extends Component<Props, state> {

  state = {
    searchResults: [],
    isLoading: false,
  }

  renderMenuItemChildren = (gif: Gif) => {
    return <span>{gif.label}</span>
  }

  onSearch = (searchText: string) => {
    searchGifs(searchText).then((searchResults: Gif[]) => {
      this.setState({ searchResults });
    });
  }

  onGifSelect = (gifs: Gif[]) => {
    this.props.onGifSelect(gifs[0]);
  }

  render() {
    const { isLoading, searchResults } = this.state;
    console.log(searchResults)
    return <AsyncTypeahead
      options={searchResults}
      isLoading={isLoading}
      onSearch={this.onSearch}
      onChange={this.onGifSelect}
      renderMenuItemChildren={this.renderMenuItemChildren}
    />
  }
}