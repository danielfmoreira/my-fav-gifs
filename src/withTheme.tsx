import React from 'react';
import { ThemeContext, Theme } from './GifContainer';

export type ThemeProps = {
  theme?: Theme;
};

export default function withTheme<P>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithTheme: React.SFC<P> = props => (
    <ThemeContext.Consumer>
      {value => <WrappedComponent {...props} theme={value} />}
    </ThemeContext.Consumer>
  );

  return WithTheme;
}
