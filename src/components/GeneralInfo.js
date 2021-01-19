import React from 'react'

const GeneralInfo = (props) => {

    const {name, phone, email, position} = props;

    return (
        <div className="generalInfo">
            <h1>General info</h1>
            <h4>Name: {name}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Email: {email}</h4>
            <h4>Position: {position}</h4>
            <button>EDIT</button> 
        </div>
    )
}

export default GeneralInfo