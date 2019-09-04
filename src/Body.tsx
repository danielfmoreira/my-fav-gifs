import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class Body extends Component<{}, {}> {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}