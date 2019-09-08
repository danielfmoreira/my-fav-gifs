import React, { Component } from 'react';
import { css } from 'emotion'
import { Button } from 'reactstrap';
import { ThemeContext, Theme } from '../ThemeContext';

type Props = {
  changeTheme: () => void;
  title: string,
}

export default class Header extends Component<Props, {}> {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    return <div className={headerStyle(theme)}>
      <Button
        className={buttonStyle}
        onClick={this.props.changeTheme}
        color={theme === Theme.light ? 'primary' : 'secondary'} >
        {theme === Theme.light ? 'Dark Mode' : 'Light Mode'}
      </Button>
      <h1>{this.props.title}</h1>
      {this.props.children}
    </div>
  }
}

const buttonStyle = css`
  position: fixed;
  top: 15px;
  right: 15px;
`

const headerStyle = (theme: Theme) => {
  return css`
    color: ${theme === Theme.light ? '#26292c' : 'white'};
    background-color: ${theme === Theme.light ? '#e9ecef' : 'black'} !important;
    z-index: 20;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 32px 0;
    height: 180px;
  `
}