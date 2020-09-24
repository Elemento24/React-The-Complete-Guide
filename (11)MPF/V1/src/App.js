import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // When we are serving our app from a sub-folder, we must make sure that we are adding the Basename attribute to the Broswer Router. This tells the React-Router, that all of our paths should be appended to the end of the URL which we specify as the Basename.
      // <BrowserRouter basename="/my-app">
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
