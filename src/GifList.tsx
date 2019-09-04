import React, { Component } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Container
} from 'reactstrap';
import { Gif } from './GifContainer';
import GifSearch from './GifSearch';
import GifListItem from './GifListItem';

type Props = {
  gifs: Gif[]
}
export default class GifList extends Component<Props, {}> {
  render() {
    return (
      <Container>
        <CardColumns>
          {this.props.gifs.map((gif: Gif) => {
            return <GifListItem gif={gif} />
          })}
        </CardColumns>
      </Container>
    );
  }
}
