import React, { useState } from 'react';
import SingleEducation from './SingleEducation';
import uniqid from "uniqid";

const Education = () => {
    const [addingMode, setAddingMode] = useState(false);
    const [educationList, setEducationList] = useState([]);
       
    
    const toggleAddingMode = () => {
        setAddingMode(!addingMode);
    };


    const addNewElement = () => {
        toggleAddingMode();
        setEducationList([...educationList, { key: uniqid() }]);       
    };


    const removeElement = (e) => {
        setEducationList(educationList.filter(item => item.key !== e.id));
        
        if (addingMode) {
            setAddingMode(false)
        }
    };


    return (
        <div className="educationBox" >
            <h2>EDUCATION LIST</h2>
            {educationList
                .map(item => 
                    <SingleEducation
                        key={item.key}
                        id={item.key}
                        addingMode={() => toggleAddingMode()}
                        remove={(e) => removeElement(e)}     
                    />                       
                )
            }

            {!addingMode &&
                <div className="generalButtonContainer">
                    <button onClick={() => addNewElement()}>ADD NEW EDUCATION</button>
                </div>
            }
        </div>
    )  
}
export default Education