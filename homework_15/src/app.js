import React, { Component } from 'react';
import Home from './features/index';

// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';


class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);