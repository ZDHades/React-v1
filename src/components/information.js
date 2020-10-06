import React, { Component } from 'react'

export default class Information extends Component {
    render() {
        return (
            <li className="list-group-item" ><strong style={{textTransform: 'capitalize'}} >{this.props.attrName}</strong> <span id="name" className="float-right"></span>{this.props.attrValue}</li>
        )
    }
}
