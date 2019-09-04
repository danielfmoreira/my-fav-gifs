import React, { Component } from 'react';
import './App.css';
import GifSearch from './GifSearch';
import GifList from './GifList';
import GifListSummary from './GifListSummary';

type State = {
  gifs: any
}

export default class GifContainer extends Component<{}, State> {
  render() {
    return <div>
      <GifSearch></GifSearch>
      <GifList></GifList>
      <GifListSummary></GifListSummary>
    </div>
  }
}