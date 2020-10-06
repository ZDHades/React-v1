import React, { Component } from 'react'
import Skills from './skills'

export default class SkillsList extends Component {
    render() {
        const employeeInformation = this.props.employeeInformation
        var skillsDict = []
        var skillsList = []
        for (let attr in employeeInformation) {
            if (employeeInformation.hasOwnProperty(attr)) {
                if (attr === 'skills') {
                    let value = employeeInformation[attr]
                    for (const _ in value) {
                        if (value.hasOwnProperty(_)) {
                            let skill = value[_];
                            skillsDict.push(skill);                            
                        }
                    }
                }
            }
        }
        for (var dicts in skillsDict) {
            var element = skillsDict[dicts];
            var keys = Object.keys(element);
            var values = element[keys];
            skillsList.push([keys[0], values]);
            }
        return (            
            <div>
                <div className="card-header">Skills</div>
                <ul id="skills" className="list-group list-group-flush">
                    {skillsList.map((lineItem, index) => (
                        <Skills attrName={lineItem[0]} attrValue={lineItem[1]} key={index} />
                    ))}                   
                </ul>
            </div>
        )
    }
}
