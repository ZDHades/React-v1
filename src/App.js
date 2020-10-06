import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Blog from './views/blog';
import Cart from './views/cart';
import Main from './views/main';
import Marketplace from './views/marketplace';
import Something from './views/something';
import './App.css';
import firebase from './firebase.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      employees: [],
      employeeInformation : {},
      cart : [],
      db: firebase.database()
    }
  }

  componentDidMount() {
    console.log(this.state.db)
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          employees: data
         })
      })
  }

  handleSelectEmployee = (empObj) => {
    this.setState({
      employeeInformation: empObj
    })
  }
  
  handleAddCart = (product) => {
    this.setState({
      cart : this.state.cart.concat(product)
    })
  }

  handleClearCart = () => {
    this.setState({
      cart : []
    })
  }

  handleDeleteItem = (product, cart) => {
    for (var i = 0; i < cart.length; i++) {
     if (cart[i] === product) {
       cart.splice(i, 1); 
       this.setState({
         cart: cart
       })
       break
      }
    }
  }

  cleanUpCart = (cart) => {
      var cartset = new Set()
      for (const product in cart) {
        if (cart.hasOwnProperty(product)) {
          cartset.add(cart[product])
          }
      }
      var cleanCart = Array.from(cartset)
      return cleanCart
}

  getTotal = (cart) => {
    var total = 0
    cart.forEach(product => {
      total += product.price
    });
    return (total).toFixed(2)
  }

  getCountOfProduct = (product, cart) => {
    var count = 0
    cart.forEach(element =>{
      if (element === product) {
        count += 1
      }
    })
    return count
  }

  

  render() {
    return (
      <div>
        <Header cart={this.state.cart} getTotal={this.getTotal} style={{marginBottom: '35px'}}/>
        <main>
          <div className="container">
            <Switch>
              <Route exact path='/' render={() => <Main employees={this.state.employees} handleSelectEmployee={this.handleSelectEmployee} employeeInformation={this.state.employeeInformation}/>}/>
              <Route exact path='/something' render={() => <Something/>}/>
              <Route exact path='/blog' render={() => <Blog/>}/>
              <Route exact path='/marketplace' render={() => <Marketplace cart={this.state.cart} handleAddCart={this.handleAddCart}/>}/>
              <Route exact path='/cart' render={() => <Cart cleanCart={this.state.cleanCart} cart={this.state.cart} handleClearCart={this.handleClearCart} handleDeleteItem={this.handleDeleteItem} cleanUpCart={this.cleanUpCart} getTotal={this.getTotal} getCountOfProduct={this.getCountOfProduct}/>}/>
            </Switch>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}
