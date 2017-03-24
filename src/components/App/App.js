import React, { Component } from 'react';
import axios from 'axios'
import SearchContainer from '../SearchContainer/SearchContainer.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      searchPhrase: null,
      langOptions: [],
      sourceLang: null,
      targetLang: null,
      translation: null
    }
    this.getLangOptions()
  }

  handleSearchInput(e) {
    this.setState({
      searchPhrase: e.target.value
    })
  }

  getLangOptions(e) {
    axios.get('https://watson-api-explorer.mybluemix.net/language-translator/api/v2/identifiable_languages')
      .then((response) => {
        this.setState({
          langOptions: response.data.languages
        })
      })
      .catch((err) => {
        console.log(err)
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
      }, () => {
        console.log(this.state.translation)
      })
    })
  }

  render() {
    return(
      <div>
        <h1>React Translator</h1>
        <SearchContainer
          onSearchInput={(e) => this.handleSearchInput(e)}
          langOptions={this.state.langOptions}
          setSourceLang={(e) => this.setSourceLang(e)}
          setTargetLang={(e) => this.setTargetLang(e)}
          onSearchSubmit={(e) => this.handleSearchSubmit(e)}
          translation={this.state.translation}
        />
      </div>
    )
  }
}

export default App;
