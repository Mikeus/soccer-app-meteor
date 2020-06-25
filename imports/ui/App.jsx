import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaiseButton from 'material-ui/RaisedButton';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <RaiseButton label='oh yeah we did it!' />
      </MuiThemeProvider>
    );
  }
}
