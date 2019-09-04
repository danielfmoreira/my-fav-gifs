import React, { Component } from 'react';
import { css } from 'emotion'
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Container, Jumbotron
} from 'reactstrap';
import GifContainer, { Gif, OnGifAdd } from './GifContainer';
import GifSearch from './GifSearch';
import GifListItem from './GifListItem';

type Props = {
  onGifSelect: OnGifAdd
}

export default class Header extends Component<Props, {}> {
  render() {
    return (
      <Jumbotron className={headerStyle}>
        <h1>My Fav Gifs</h1>
        <GifSearch onGifSelect={this.props.onGifSelect}></GifSearch>
      </Jumbotron>
    );
  }
}

const headerStyle = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`