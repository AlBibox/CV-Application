import React, { useState } from 'react';
import SingleSkill from './SingleSkill';
import uniqid from "uniqid";


const Skills = () => {
    const [addingMode, setAddingMode] = useState(false);
    const [skillsList, setSkillsList] = useState([]);


    const toggleAddingMode = () => {
        setAddingMode(!addingMode);
    };


    const addNewElement = () => {
        toggleAddingMode();
        setSkillsList([...skillsList, { key: uniqid() }]);
    };


    const removeElement = (e) => {
        setSkillsList(skillsList.filter(item => item.key !== e.id));

        if (addingMode) {
            setAddingMode(false)
        }
    };

      
    return (
        <div className="skills" >
            <h2>SKILLS</h2>
            <div className="itemsContainer">
                {skillsList
                    .map(item =>
                        <SingleSkill
                            key={item.key}
                            id={item.key}
                            addingMode={() => toggleAddingMode()}
                            remove={(e) => removeElement(e)}
                        />
                    )}
            </div>
            
            {!addingMode &&
                <div className="generalButtonContainer"> 
                    <button onClick={() => addNewElement()}>ADD NEW SKILL</button>
                </div>
            }
        </div>
    )  
}

export default Skills