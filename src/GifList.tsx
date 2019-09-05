import React, { Component } from 'react';
import {
  CardColumns, Container
} from 'reactstrap';
import { Gif, OnGifDelete } from './GifContainer';
import GifListItem from './GifListItem';

type Props = {
  gifs: Gif[]
  onGifDelete: OnGifDelete,
}
export default class GifList extends Component<Props, {}> {
  render() {
    return (
      <Container>
        <CardColumns>
          {this.props.gifs.map((gif: Gif) => {
            return <GifListItem onGifDelete={this.props.onGifDelete} gif={gif} />
          })}
        </CardColumns>
      </Container>
    );
  }
}
