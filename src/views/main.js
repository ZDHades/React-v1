import React, { Component } from 'react';
import Employees from '../components/employees';
import InformationList from '../components/informationlist';
import SkillsList from '../components/skillslist';

export default class Main extends Component {
    render() {
        return (
            <div className="row">
                <div className="card-deck">
                    <div id="employees-container" className="card" style={{ width: "400px" }}>
                        <Employees employees={this.props.employees} handleSelectEmployee={this.props.handleSelectEmployee} />
                    </div>
                    <div id="information-container" className="card" style={{ width: "400px" }}>
                        <InformationList employeeInformation={this.props.employeeInformation}/>
                    </div>
                    <div id="skills-container" className="card" style={{ width: "400px" }}>
                        <SkillsList employeeInformation={this.props.employeeInformation}/>
                    </div>
                </div>
            </div>
        )
    }
}
