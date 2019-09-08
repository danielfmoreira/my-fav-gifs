import React from 'react';

export enum Theme {
  light = 'light',
  dark = 'dark'
}

export const ThemeContext = React.createContext(Theme.light);