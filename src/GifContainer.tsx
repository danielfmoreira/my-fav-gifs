import React, { Component } from 'react';
import GifList from './GifList';
import GifListSummary from './GifListSummary';
import Header from './Header';
import GifSearch from './GifSearch';
import Body from './Body';
import Footer from './Footer';

export enum Theme {
  light = 'light',
  dark = 'dark'
}
export const ThemeContext = React.createContext(Theme.dark);

export type Gif = {
  id: string,
  label: string,
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

  onGifAdd = (gif: Gif) => {
    this.setState({ gifs: [...this.state.gifs, gif] })
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
      <Header changeTheme={this.changeTheme}>
        <h1>My Fav Gifs</h1>
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
