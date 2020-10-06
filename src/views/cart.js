import React, { Component } from 'react'
import CartA from '../components/cartA'

export default class Cart extends Component {
      
    render() {
        let handleClearCart = this.props.handleClearCart
        let cart = this.props.cart
        let getTotal = this.props.getTotal
        let total = getTotal(cart)
        
        return (
            <div>
                <h3>Your shopping cart
                    <button onClick={() => handleClearCart()} className="btn btn-sm btn-danger">Clear Cart<i className="fa fa-trash" aria-hidden="true"></i></button>
                </h3>
                <hr />
                <CartA handleDeleteItem={this.props.handleDeleteItem} getCountOfProduct={this.props.getCountOfProduct} cart={cart} cleanUpCart={this.props.cleanUpCart}/>
                <div className="card-footer">
                    <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                        <div className="pull-right" style={{Margin: '10px'}}>
                            <button id='checkout-button' className="btn btn-success pull-right">Checkout</button>
                                <div className="pull-right" style={{ Margin: '5px' }}>Total price: <b>${total}</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}
