import React from 'react'

const JobExperience = (props) => {
    return (
        <div className="jobExperiece">
            <h2>JOB EXPERIENCE</h2>
            {props.children}
            <button>ADD JOB</button>
        </div>
    )
}

export default JobExperience