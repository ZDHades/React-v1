import React, { Component } from 'react'
import Employee from './employee'

export default class Employees extends Component {
    render() {
        let employees = this.props.employees
        return (
            <div>
                <div className="card-header">Employee</div>

                <ul id="employees" className="list-group list-group-flush">
                    {employees.map((emp, index) => (<Employee emp={emp} key={index} handleSelectEmployee={this.props.handleSelectEmployee}/>) )}
                </ul>
            </div>
        )
    }
}
