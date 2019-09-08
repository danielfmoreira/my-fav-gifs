import React, { Component } from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import { Gif, OnGifDelete } from '../container/GifContainer';
import { css } from 'emotion';
import withConfirmationModal, { ConfirmationModalProps } from '../withConfirmationModal';

type Props = {
  gif: Gif,
  onGifDelete: OnGifDelete,
} & ConfirmationModalProps
class GifListItem extends Component<Props, {}> {
  onGifDelete = () => {
    this.props.presentConfirmationModal!({
      title: 'Delete Gif',
      bodyText: 'You are about to delete this Gif. Are you sure?',
      onConfirm: () => {
        this.props.onGifDelete(this.props.gif.id);
      }
    })
  }

  render() {
    const { gif } = this.props;
    return <Card className={cardStyle}>
      <CardImg top width="100%" src={gif.url} alt={gif.name}></CardImg>
      <Button onClick={this.onGifDelete} className={buttonStyle} color="danger">delete</Button>
    </Card>
  }
}

export default withConfirmationModal(GifListItem);

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