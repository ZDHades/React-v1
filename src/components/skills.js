import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <li className="list-group-item"><strong style={{ textTransform: 'capitalize' }}>{this.props.attrName}</strong> <span id="name" className="float-right">{this.props.attrValue}</span></li>
            </div>
        )
    }
}
