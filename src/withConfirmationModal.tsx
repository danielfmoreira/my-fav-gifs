import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

type ModalConfig = {
  title?: string,
  bodyText?: string,
  confirmationButtonColor?: "danger",
  confirmationButtonText?: string,
  onConfirm: () => void
}

type State = {
  isOpen: boolean;
  modalConfig: ModalConfig
}

export type ConfirmationModalProps = {
  presentConfirmationModal?: (dialogConfig: ModalConfig) => void
}

export default function withConfirmationModal<P>(
  WrappedComponent: React.ComponentType<P>
) {
  return class ConfirmationModal extends React.Component<P, State> {

    state: State = {
      isOpen: false,
      modalConfig: {
        onConfirm: () => { }
      }
    }

    presentModal = (modalConfig: ModalConfig) => {
      this.setState({ isOpen: true, modalConfig })
    }

    toggle = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    }

    onConfirm = () => {
      this.toggle()
      this.state.modalConfig.onConfirm();
    }

    render() {
      const {
        bodyText, confirmationButtonColor, confirmationButtonText, title
      } = this.state.modalConfig
      return <>
        <WrappedComponent presentConfirmationModal={this.presentModal} {...this.props} />
        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title || "Please Confirm"}</ModalHeader>
          <ModalBody>
            {bodyText}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
            <Button color={confirmationButtonColor || "danger"} onClick={this.onConfirm}>{confirmationButtonText || "confirm"}</Button>
          </ModalFooter>
        </Modal>
      </>;
    }
  };
}
