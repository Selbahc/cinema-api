import React, { Component } from 'react';
import './App.css';
import '../node_modules/spectre.css/dist/spectre.min.css';
import '../node_modules/spectre.css/dist/spectre-icons.min.css';


import Search from './components/Search';
import GetFavorites from './components/GetFavorites';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <h1>MY FAVORITES :</h1>
        <GetFavorites />
      </div>
    );
  }
}

export default App;
