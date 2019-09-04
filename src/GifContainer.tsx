import React, { Component } from 'react';
import GifList from './GifList';
import GifListSummary from './GifListSummary';
import Header from './Header';
import GifSearch from './GifSearch';
import Body from './Body';
import Footer from './Footer';

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
      <Header>
        <h1>My Fav Gifs</h1>
        <GifSearch onGifSelect={this.onGifAdd}></GifSearch>
      </Header>
      <Body>
        <GifList gifs={gifs} onGifDelete={this.onGifDelete}></GifList>
      </Body>
      <Footer>
        <GifListSummary gifs={gifs} onAllGifsDelete={this.onAllGifsDelete}></GifListSummary>
      </Footer>
    </>
  }
}

export type OnGifAdd = typeof GifContainer.prototype.onGifAdd;
export type OnGifDelete = typeof GifContainer.prototype.onGifDelete;
export type OnAllGifsDelete = typeof GifContainer.prototype.onAllGifsDelete;
