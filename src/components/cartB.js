import React, { Component } from 'react'

export default class CartB extends Component {
   
    render() {
        let product = this.props.product
        let handleDeleteItem = this.props.handleDeleteItem
        let getCountOfProduct = this.props.getCountOfProduct
        let cart = this.props.cart
        let count = getCountOfProduct(product, cart)
        
        return (
            <div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-fluid" src={product.image} alt={product.name} />
                        </div>
                        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                            <h4 className="product-name"><strong>{product.name}</strong></h4>
                            <h4>
                                <small>{product.description}</small>
                            </h4>
                        </div>
                        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                            <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{ paddingTop: '5px' }}>
                                <h6><strong>${product.price}<span className="text-muted">x {count}</span></strong></h6>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4">
                            </div>
                            <div className="col-2 col-sm-2 col-md-2 text-right">
                                <button type="button" onClick={() => handleDeleteItem(product, cart)}
                                    className="btn btn-outline-danger btn-xs">Delete
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}
