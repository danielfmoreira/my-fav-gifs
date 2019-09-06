import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { css } from 'emotion';

export default class Body extends Component<{}, {}> {
  render() {
    return (
      <Container className={bodyStyle}>
        {this.props.children}
      </Container>
    );
  }
}

const bodyStyle = css`
  z-index: 10;
  width: 100%;
  margin-top: 222px;
  margin-bottom: 60px;
  width: 100%;
  overflow: scroll;
`;