import React, { Component } from 'react';
import { Gif, OnAllGifsDelete } from './GifContainer';
import { Button } from 'reactstrap';

type Props = {
  gifs: Gif[];
  onAllGifsDelete: OnAllGifsDelete;
}
export default class GifListSummary extends Component<Props, {}> {
  render() {
    return <div>Gif Count: {this.props.gifs.length} <Button color="danger" onClick={this.props.onAllGifsDelete}>reset list</Button></div>
  }
}