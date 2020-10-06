import React, { Component } from 'react'
import Information from './information'

export default class InformationList extends Component {
    render() {
        const employeeInformation = this.props.employeeInformation
        var informationList = []
        for (let attr in employeeInformation) {
            if (employeeInformation.hasOwnProperty(attr)) {
                if (attr !== 'skills') {
                    let value = employeeInformation[attr]
                    informationList.push([attr, value])                    
                }                
            }
        }        
        return (
            <div>
                <div className="card-header">Information</div>
                <ul id="information" className="list-group list-group-flush">
                    {informationList.map((lineItem, index) =>(
                        <Information attrName={lineItem[0]} attrValue={lineItem[1]} key={index}/>
                    ))}
                </ul>
            </div>
        )
    }
}