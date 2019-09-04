import React, { Component } from 'react';
import { css } from 'emotion'
import { Jumbotron } from 'reactstrap';

export default class Footer extends Component<{}, {}> {
  render() {
    return (
      <div className={footerStyle}>
        {this.props.children}
      </div>
    );
  }
}

const footerStyle = css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`