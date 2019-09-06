import React, { Component } from 'react';
import { css } from 'emotion'
import { Jumbotron, Button } from 'reactstrap';
import { Theme } from './GifContainer';
import withTheme, { ThemeProps } from './withTheme';

type Props = {
  changeTheme: () => void;
}

class Header extends Component<Props & ThemeProps, {}> {

  render() {
    const theme = this.props.theme!;
    return <div className={headerStyle(this.props.theme!)}>
      <Button
        className={buttonStyle}
        onClick={this.props.changeTheme}
        color={theme === Theme.light ? 'primary' : 'secondary'} >
        {theme === Theme.light ? 'Dark Mode' : 'Light Mode'}
      </Button>
      {this.props.children}
    </div>

  }
}

export default withTheme(Header);

const buttonStyle = css`
  position: fixed;
  top: 15px;
  right: 15px;
`

const headerStyle = (theme: Theme) => {
  return css`
    color: ${theme == Theme.light ? '#26292c' : 'white'};
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