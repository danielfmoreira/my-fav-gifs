import React, { Component } from 'react';
import './App.css';
import GifSearch from './GifSearch';
import GifList from './GifList';
import GifListSummary from './GifListSummary';

export type Gif = {
  id: string,
  // TODO: Rename to name
  label: string,
  url: string,
}

type State = {
  gifs: Gif[],
}

export default class GifContainer extends Component<{}, State> {
  onGifAdd = (gif: Gif) => {
    this.setState({ gifs: [...this.state.gifs, gif] })
  }

  render() {
    return <div>
      <GifSearch onGifSelect={this.onGifAdd}></GifSearch>
      <GifList></GifList>
      <GifListSummary></GifListSummary>
    </div>
  }
}