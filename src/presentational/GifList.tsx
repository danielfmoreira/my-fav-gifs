import React, { Component } from 'react';
import {
  CardColumns
} from 'reactstrap';
import { Gif, OnGifDelete } from '../container/GifContainer';
import GifListItem from './GifListItem';
import { css } from 'emotion';

type Props = {
  gifs: Gif[]
  onGifDelete: OnGifDelete,
}
export default class GifList extends Component<Props, {}> {
  render() {
    return (
      this.props.gifs.length ? <CardColumns>
        {this.props.gifs.map((gif: Gif) => {
          return <GifListItem key={gif.id} onGifDelete={this.props.onGifDelete} gif={gif} />
        })}
      </CardColumns> : <h2 className={emptyStateStyle}>No Gifs added yet!</h2>
    );
  }
}

const emptyStateStyle = css`
  text-align: center;
  margin-top: 15px;
`
