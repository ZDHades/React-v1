import React, { Component } from 'react'
import CartB from './cartB'

export default class CartA extends Component {
   
    render() {
        let cart = this.props.cart
        let cleanUpCart = this.props.cleanUpCart
        const cleanCart = cleanUpCart(cart)
        return (
            <div>
                {cleanCart ? cleanCart.map((product) => 
                    <CartB product={product} handleDeleteItem={this.props.handleDeleteItem} getCountOfProduct={this.props.getCountOfProduct} cart={cart}/>
                    ): null}
            </div>
        )
    }
}

