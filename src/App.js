import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Main from './views/main';
import Something from './views/something';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          employees: data
         })
      })
  }
  render() {
    return (
      <div>
        <Header/>
        <main>
          <div className="container">
            <Switch>
              <Route exact path='/' render={() => <Main employees={this.state.employees}/>}/>
              <Route exact path='/something' render={() => <Something/>}/>
            </Switch>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}
