import React, { Component } from 'react'
import Footer from './components/footer'
import Header from './components/header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <div className="row">
              <div className="card-deck">
                <div id="employees-container" className="card" style={{width: "400px"}}>
                  <div className="card-header">
                    Employee
                </div>
                  <ul id="employees" className="list-group list-group-flush">
                  </ul>
                </div>
                <div id="information-container" className="card" style={{width: "400px"}}>
                  <div className="card-header">
                    Information
                </div>
                  <ul id="information" className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Name</strong> <span id="name" className="float-right"></span></li>
                    <li className="list-group-item"><strong>Age</strong> <span id="age" className="float-right"></span></li>
                    <li className="list-group-item"><strong>Occupation</strong> <span id="occupation" className="float-right"></span></li>
                    <li className="list-group-item"><strong>Location</strong> <span id="location" className="float-right"></span></li>
                  </ul>
                </div>
                <div id="skills-container" className="card" style={{width: "400px"}}>
                  <div className="card-header">
                    Skills
                </div>
                  <ul id="skills" className="list-group list-group-flush">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
