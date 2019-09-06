import React, { Component } from 'react';
import { css } from 'emotion'
import { Jumbotron } from 'reactstrap';
import withTheme, { ThemeProps } from './withTheme';
import { Theme } from './GifContainer';

class Footer extends Component<ThemeProps, {}> {
  render() {
    return (
      <div className={footerStyle(this.props.theme!)}>
        {this.props.children}
      </div>
    );
  }
}

export default withTheme(Footer);

const footerStyle = (theme: Theme) => {
  return css`
    color: ${theme == Theme.light ? '#26292c' : 'white'};
    background-color: ${theme === Theme.light ? '#e9ecef' : 'black'} !important;
    z-index: 20;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e9ecef;
  `
}