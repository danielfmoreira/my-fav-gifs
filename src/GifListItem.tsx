import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import { Gif } from './GifContainer';

type Props = {
  gif: Gif
}
export default class GifListItem extends Component<Props, {}> {
  render() {
    const { gif } = this.props;
    return <Card key={gif.id}>
      <CardImg top width="100%" src={gif.url} alt={gif.label} />
    </Card>
  }
}