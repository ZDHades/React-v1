import React, { Component } from 'react'

export default class Products extends Component {
    constructor(props) {
        super()
        this.state = {
            products: {}
        }
    }
    render() {
        let product = this.props.product
        let handleAddCart = this.props.handleAddCart
        return (
            <div>
                <div className="img-wrap"><img src={product.image} className="img-fluid" alt={product.name}/></div>
                <figcaption className="info-wrap">
                    <h4 className="title">{product.name}</h4>
                    <p className="desc">{product.description}</p>
                </figcaption>
                <div className="bottom-wrap">
                    <button onClick={() => handleAddCart(product)} className="btn btn-sm btn-outline-primary float-right">Add to Cart!</button>
                    <div className="price-wrap h5">
                        <span className="price-new">${product.price}</span> <del className="price-old">${(product.price *1.2).toFixed(2)}</del>
                    </div>
                </div>
            </div>
        )
    }
}
