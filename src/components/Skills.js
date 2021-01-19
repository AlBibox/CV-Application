import React from 'react'

const Skills = (props) => {
    return (
        <div className="skills">
            <h2>SKILLS</h2>
            {props.children}
            <button>ADD SKILL</button>
        </div>
    )
}

export default Skills