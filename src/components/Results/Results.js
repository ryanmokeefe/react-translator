import React, { Component } from 'react';
import Share from '../Share/Share'
import {Route, Link} from 'react-router-dom'




class Results extends Component {

      render () {
        return (
        <div>
            <h2>Translation</h2>
            <p>{this.props.translation}</p>
            <Link 
                to={`${this.props.match.url}/share`}
            />
            <Route 
                to={`${this.props.match.url}/share`}
                component={Share}
            />
        </div>
        )
      }

}
export default Results
