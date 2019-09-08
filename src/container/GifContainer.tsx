import React, { Component } from 'react';
import GifList from '../presentational/GifList';
import GifListSummary from '../presentational/GifListSummary';
import Header from '../presentational/Header';
import GifSearch from '../control/GifSearch';
import Body from '../presentational/Body';
import Footer from '../presentational/Footer';
import { Theme, ThemeContext } from '../ThemeContext';

export type Gif = {
  id: string,
  name: string,
  url: string,
}

type State = {
  gifs: Gif[],
  theme: Theme.light | Theme.dark
}

export default class GifContainer extends Component<{}, State> {
  static contextType = ThemeContext;

  state: State = {
    gifs: [],
    theme: this.context,
  }

  onGifAdd = (newGif: Gif) => {
    !this.state.gifs.find(gif => gif.id === newGif.id) && this.setState({ gifs: [...this.state.gifs, newGif] })
  }

  onGifDelete = (gifId: Gif['id']) => {
    this.setState({ gifs: this.state.gifs.filter(gif => { return gif.id !== gifId }) })
  }

  onAllGifsDelete = () => {
    this.setState({ gifs: [] })
  }

  changeTheme = () => {
    this.setState({ theme: this.state.theme === Theme.light ? Theme.dark : Theme.light })
  }

  render() {
    const { gifs } = this.state;
    return <ThemeContext.Provider value={this.state.theme}>
      <Header title="My Fav Gifs" changeTheme={this.changeTheme}>
        <GifSearch onGifSelect={this.onGifAdd}></GifSearch>
      </Header>
      <Body>
        <GifList gifs={gifs} onGifDelete={this.onGifDelete}></GifList>
      </Body>
      <Footer>
        <GifListSummary gifs={gifs} onAllGifsDelete={this.onAllGifsDelete}></GifListSummary>
      </Footer>
    </ThemeContext.Provider>
  }
}

export type OnGifAdd = typeof GifContainer.prototype.onGifAdd;
export type OnGifDelete = typeof GifContainer.prototype.onGifDelete;
export type OnAllGifsDelete = typeof GifContainer.prototype.onAllGifsDelete;
