import React, { useState, useEffect } from 'react'

const SingleSkill = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [skillName, setSkillName] = useState("");


    useEffect(() => {
        setEditMode(true);
    }, []);


    const toggleEditMode = () => {
        setEditMode(!editMode)
    };

        
    const handleSubmit = () => {
        toggleEditMode();
        props.addingMode();
    }


    const handleChange = (e) => {
        const value = e.target.value;
        setSkillName(value)
    }

 
    let validator = (!skillName) ? true : false;

    if (!editMode) {
        return (
            <div className="singleSkill">
                <h4 className="data">{skillName}</h4>
                <div className="deleteButton">
                    <button onClick={() => props.remove(props)}>X</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="singleSkillEditable">
                <div className="fieldWrapper">
                    <input
                        placeholder="* Enter the skill name"
                        type="text"
                        name="skillName"
                        value={skillName}
                        onChange={(event) => handleChange(event)}
                    />
                </div>                  
                <div className="singleButtonsContainer">
                    <button onClick={() => handleSubmit()} disabled={validator}>SUBMIT</button>
                    <button onClick={() => props.remove(props)}>UNDO</button>
                </div>
            </div>
        )
    }  
}
export default SingleSkill
