import React, { Component } from 'react';
import './App.css';
import '../node_modules/spectre.css/dist/spectre.min.css';

import Search from './components/Search';
import Random from './components/Random';
import ToSee from './components/ToSee';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />

        {/* <Random /> */}
        {/* <ToSee /> */}

      </div>
    );
  }
}

export default App;
