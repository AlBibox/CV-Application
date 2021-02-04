import React, { useState } from 'react';
import SingleJob from './SingleJob';
import uniqid from "uniqid";


const JobExperience = () => {
    const [addingMode, setAddingMode] = useState(false);
    const [jobsList, setJobsList] = useState([]);


    const toggleAddingMode = () => {
        setAddingMode(!addingMode);
    };


    const addNewElement = () => {
        toggleAddingMode();
        setJobsList([...jobsList, { key: uniqid() }]);
    };


    const removeElement = (e) => {
        setJobsList(jobsList.filter(item => item.key !== e.id));

        if (addingMode) {
            setAddingMode(false)
        }
    };
    

    return (
        <div className="jobsBox" >
            <h2>JOBS LIST</h2>
            {jobsList
                .map(item =>
                    <SingleJob
                        key={item.key}
                        id={item.key}
                        addingMode={() => toggleAddingMode()}
                        remove={(e) => removeElement(e)}
                    />
                )
            }

            {!addingMode &&
                <div className="generalButtonContainer">
                    <button onClick={() => addNewElement()}>ADD NEW JOB</button>
                </div> 
            }
        </div>
    ) 
}
export default JobExperience