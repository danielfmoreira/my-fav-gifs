import React, { Component } from 'react';
import { Gif } from './GifContainer';

type Props = {
  gifs: Gif[]
}
export default class GifListSummary extends Component<Props, {}> {
  render() {
    return <div>Gif Count: {this.props.gifs.length}</div>
  }
}