import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { css } from 'emotion';
import { ThemeContext, Theme } from '../ThemeContext';

export default class Body extends Component<{}, {}> {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    return <div className={bodyStyle(theme)}>
      <Container>
        {this.props.children}
      </Container>
    </div>
  }
}

const bodyStyle = (theme: Theme) => {
  return css`
    color: ${theme === Theme.light ? '#26292c' : 'white'};
    background-color: ${theme === Theme.light ? 'white' : 'black'} !important;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: calc(100% - 240px);
    margin-top: 180px;
    margin-bottom: 60px;
    padding-top: 15px;
    width: 100%;
    overflow: scroll;
  `;
}
