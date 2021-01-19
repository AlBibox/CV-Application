import React from 'react'

const SingleJob = (props) => {
    const {companyName, jobPosition, initialDate, endingDate, description, mainTask} = props;

    return (
        <div className="singleJob">
            <h4>CompanyName: {companyName}</h4>
            <h4>Position: {jobPosition}</h4>
            <div>
                <h4>From: {initialDate}</h4>
                <h4>Till: {endingDate}</h4>
            </div>
            <h4>Main tasks: {mainTask}</h4>
            <h4>Description: {description}</h4>
            <div className="buttons">
                <button>EDIT</button>
                <button>DELETE</button>
            </div>
        </div>
    )
}

export default SingleJob
