import React, { Component } from 'react'
import Products from '../components/products'

export default class Marketplace extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        fetch('https://flaskbook-api.herokuapp.com/api/shop')
            .then(res => res.json())
            .then(data => this.setState({ products : data }))
    }
    render() {
        let products = this.state.products
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <figure className="card card-product">
                                {products ? products.map(product => (
                                    <Products product={product} key={product.id} handleAddCart={this.props.handleAddCart} /> )
                                ): null}
                         </figure>
                    </div>
                </div>
            </div>
        )
    }
}