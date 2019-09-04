import React, { Component } from 'react';
import { css } from 'emotion'
import { Jumbotron } from 'reactstrap';

export default class Header extends Component<{}, {}> {
  render() {
    return (
      <Jumbotron className={headerStyle}>
        {this.props.children}
      </Jumbotron>
    );
  }
}

const headerStyle = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 222px;
`