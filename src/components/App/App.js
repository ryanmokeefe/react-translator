import React, { Component } from 'react';
import Search from '../Search/Search.js'
import './App.css'
import {Route, Link, Redirect, Switch} from 'react-router-dom'
import Results from '../Results/Results.js'


class App extends Component {

  constructor (props) {
    super(props)
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
          <Link to="/search"> Search </Link>
          <Link to="/results">Results </Link>
        </nav>
        <main>
          {/* use search only if /search was navigated to */}
          <Switch>

          <Route 
            path="/search" render={
              // passing props into route
              (props) => (
              <Search
              //  spread operator:
              {...props}
              translation={ this.state.translation }
              setTranslation={ (data) => this.setTranslation(data) }
          />
          )}
        />
        <Route 
          path="/results" render={
            () => (
            <Results
            translation={ this.state.translation }
            />
          )}
        />
        <Route 
          path="/*"
          render={() => (<Redirect to="/search" />
          )}
        />
        </Switch>
        </main>
      </div>
    )
  }
}

export default App;
