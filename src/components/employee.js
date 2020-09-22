import React, { Component } from 'react'
import Information from './information'

export default class Employee extends Component {
    // handleClick = (emp) => {

    // }
    render() {
        const emp = this.props.emp
        return (
            <li onClick={() => <Information emp={emp}/> }className="list-group-item">{emp.name}</li>
        )
    }
}
