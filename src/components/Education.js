import React from 'react'

const Education = (props) => {
    return (
        <div className="educationBox">
            <h2>EDUCATION</h2>
            {props.children}
            <button>ADD EDUCATION</button> 
        </div>
    )
}

export default Education