import React, { Component } from 'react';
import axios from 'axios'
import SearchContainer from '../SearchContainer/SearchContainer.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchPhrase: null,
      langOptions: [
        { short: "en", name: "English" },
        { short: "es", name: "Spanish" },
        { short: "de", name: "German" },
        { short: "fr", name: "French" },
        { short: "it", name: "Italian" },
        { short: "ja", name: "Japanese" },
        { short: "pt", name: "Portugeuse" },
      ],
      sourceLang: null,
      targetLang: null,
      translation: null
    }
  }

  handleSearchInput(e) {
    this.setState({
      searchPhrase: e.target.value
    })
  }

  setSourceLang(e) {
    this.setState({
      sourceLang: e.target.value
    })
  }

  setTargetLang(e) {
    this.setState({
      targetLang: e.target.value
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault()
    axios.get('https://watson-api-explorer.mybluemix.net/language-translator/api/v2/translate', {
      params: {
        source: this.state.sourceLang,
        target: this.state.targetLang,
        text: this.state.searchPhrase
      }
    }).then((response) => {
      this.setState({
        translation: response.data
      })
    })
  }

  render() {
    return(
      <div>
        <nav>
          <h1>React Translator</h1>
        </nav>
        <main>
          <SearchContainer
            onSearchInput={(e) => this.handleSearchInput(e)}
            langOptions={this.state.langOptions}
            setSourceLang={(e) => this.setSourceLang(e)}
            setTargetLang={(e) => this.setTargetLang(e)}
            onSearchSubmit={(e) => this.handleSearchSubmit(e)}
            translation={this.state.translation}
          />
        </main>
      </div>
    )
  }
}

export default App;
