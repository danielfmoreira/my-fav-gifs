import React, { Component } from 'react';
import { css } from 'emotion'
import { Theme, ThemeContext } from '../ThemeContext';

export default class Footer extends Component<{}, {}> {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    return <div className={footerStyle(theme)}>
      {this.props.children}
    </div>
  }
}

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