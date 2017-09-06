import React, { Component } from 'react';
import Search from '../Search/Search.js'
import './App.css'

class App extends Component {
  render() {
    return(
      <div>
        <nav>
          <h1>React Translator</h1>
        </nav>
        <main>
          <Search />
        </main>
      </div>
    )
  }
}

export default App;
