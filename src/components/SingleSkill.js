import React from 'react'

const SingleSkill = (props) => {
    const {skillName} = props;

    return (
        <div className="singleSkill">
            <h4>{skillName}</h4>
            
            <div className="buttons">
                <button>DELETE</button>
            </div>
        </div>
    )
}

export default SingleSkill
