import React, { Component } from 'react';
import './App.css';
import GifSearch from './GifSearch';
import GifList from './GifList';
import GifListSummary from './GifListSummary';
import { Container, Jumbotron } from 'reactstrap';
import Header from './Header';

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

  state: State = {
    gifs: []
  }

  onGifAdd = (gif: Gif) => {
    this.setState({ gifs: [...this.state.gifs, gif] })
  }

  onGifDelete = (gifId: Gif['id']) => {
    this.setState({ gifs: this.state.gifs.filter(gif => { return gif.id !== gifId }) })
  }

  onAllGifsDelete = () => {
    this.setState({ gifs: [] })
  }

  render() {
    const { gifs } = this.state;
    return <>
      <Header onGifSelect={this.onGifAdd}></Header>
      <GifList gifs={gifs} onGifDelete={this.onGifDelete}></GifList>
      <GifListSummary gifs={gifs}></GifListSummary>
    </>
  }
}

export type OnGifAdd = typeof GifContainer.prototype.onGifAdd;
export type OnGifDelete = typeof GifContainer.prototype.onGifDelete;
