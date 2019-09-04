import React, { Component } from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import { Gif, OnGifDelete } from './GifContainer';
import { css } from 'emotion';

type Props = {
  gif: Gif,
  onGifDelete: OnGifDelete,
}
export default class GifListItem extends Component<Props, {}> {
  onGifDelete = () => {
    this.props.onGifDelete(this.props.gif.id);
  }

  render() {
    const { gif } = this.props;
    return <Card key={gif.id} className={cardStyle}>
      <CardImg top width="100%" src={gif.url} alt={gif.label}></CardImg>
      <Button onClick={this.onGifDelete} className={buttonStyle} color="danger">delete</Button>
    </Card>
  }
}

const cardStyle = css`
 &:hover button {
  visibility: visible;
 }
`

const buttonStyle = css`
  position: absolute;
  right: 10px;
  bottom: 10px;
  visibility: hidden;
`