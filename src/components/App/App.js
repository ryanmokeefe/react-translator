import React, { Component } from 'react';
import Search from '../Search/Search.js'
import './App.css'

class App extends Component {

  constructor () {
    super()
    this.state = {
      translation: null
    }
  }

  setTranslation (data) {
    this.setState({
      translation: data
    })
  }

  render() {
    return(
      <div>
        <nav>
          <h1>React Translator</h1>
        </nav>
        <main>
          <Search
            translation={ this.state.translation }
            setTranslation={ (data) => this.setTranslation(data) }
          />
        </main>
      </div>
    )
  }
}

export default App;
