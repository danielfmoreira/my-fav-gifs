import React, { Component } from 'react';
import { Gif, OnAllGifsDelete } from '../container/GifContainer';
import { Button } from 'reactstrap';
import withConfirmationModal, { ConfirmationModalProps } from '../withConfirmationModal';

type Props = {
  gifs: Gif[];
  onAllGifsDelete: OnAllGifsDelete;
} & ConfirmationModalProps
class GifListSummary extends Component<Props, {}> {

  onAllGifsDelete = () => {
    this.props.presentConfirmationModal!({
      title: 'Delete All Gifs',
      bodyText: 'You are about to delete all your Gifs. Are you sure?',
      onConfirm: () => {
        this.props.onAllGifsDelete();
      }
    })
  }

  render() {
    const gifsCount = this.props.gifs.length;
    return <div>Gif Count: {gifsCount} {gifsCount !== 0 && <Button color="danger" onClick={this.onAllGifsDelete}>reset list</Button>}</div>
  }
}

export default withConfirmationModal(GifListSummary)