import React from 'react'

const SingleEducation = (props) => {
    const {studyTitle, schoolName, initialDate, endingDate, description} = props;

    return (
        <div className="singleEducation">
            <h4>Title of study: {studyTitle}</h4>
            <h4>School name: {schoolName}</h4>
            <div>
                <h4>From: {initialDate}</h4>
                <h4>Till: {endingDate}</h4>
            </div>
            <h4>Description: {description}</h4>
            <div className="buttons">
                <button>EDIT</button>
                <button>DELETE</button>
            </div>
        </div>
    )
}

export default SingleEducation
