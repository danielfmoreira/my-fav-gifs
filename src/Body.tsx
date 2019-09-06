import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { css } from 'emotion';
import withTheme, { ThemeProps } from './withTheme';
import { Theme } from './GifContainer';

class Body extends Component<ThemeProps, {}> {
  render() {
    return (
      <div className={bodyStyle(this.props.theme!)}>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default withTheme(Body);

const bodyStyle = (theme: Theme) => {
  return css`
    color: ${theme == Theme.light ? '#26292c' : 'white'};
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
