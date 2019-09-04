import React, { Component } from 'react';
import './App.css';
import GifSearch from './GifSearch';
import GifList from './GifList';
import GifListSummary from './GifListSummary';

export type Gif = {
  id: number,
  name: string,
  url: string,
}

type State = {
  gifs: Gif[],
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