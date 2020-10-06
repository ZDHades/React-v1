import React, { Component } from 'react'

export default class Employee extends Component {
    render() {
        const emp = this.props.emp;
        const handleSelectEmployee = this.props.handleSelectEmployee;
        return (
            <li onClick={() => handleSelectEmployee(emp)}className="list-group-item">{emp.name}</li>
        )
    }
}
