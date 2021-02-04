import React, { useState, useEffect } from 'react'

const SingleJob = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [isNew, setIsNew] = useState(true);

    const [jobInfo, setJobInfo] = useState({
        companyName: "",
        position: "",
        initialDate: "",
        endingDate: "",
        endingDateNotYetFinished: false,
        mainTasks: "",
        description: "",
    });

    const [jobInfoOld, setJobInfoOld] = useState({
        companyNameOld: "",
        positionOld: "",
        initialDateOld: "",
        endingDateOld: "",
        endingDateNotYetFinishedOld: "",
        mainTasksOld: "",
        descriptionOld: "",
    })

    useEffect(() => {
        setIsNew(true);
        setEditMode(true);
        setJobInfoOld({
            companyNameOld: jobInfo.companyName,
            positionOld: jobInfo.position,
            initialDateOld: jobInfo.initialDate,
            endingDateOld: jobInfo.endingDate,
            endingDateNotYetFinishedOld: jobInfo.endingDateNotYetFinished,
            mainTasksOld: jobInfo.mainTasks,
            descriptionOld: jobInfo.description,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
        

    const toggleEditMode = () => {
        setEditMode(!editMode)
    };


    //METHOD FOR SUBMITTING OLD ELEMENTS
    const handleSubmit = () => {
        setJobInfoOld({
            companyNameOld: jobInfo.companyName,
            positionOld: jobInfo.position,
            initialDateOld: jobInfo.initialDate,
            endingDateOld: jobInfo.endingDate,
            endingDateNotYetFinishedOld: jobInfo.endingDateNotYetFinished,
            mainTasksOld: jobInfo.mainTasks,
            descriptionOld: jobInfo.description,
        });
        toggleEditMode();
    }


    //METHOD FOR SUBMITTING NEW ELEMENT
    const handleSubmitforNewElement = () => {
        setIsNew(false);

        setJobInfoOld({
            companyNameOld: jobInfo.companyName,
            positionOld: jobInfo.position,
            initialDateOld: jobInfo.initialDate,
            endingDateOld: jobInfo.endingDate,
            endingDateNotYetFinishedOld: jobInfo.endingDateNotYetFinished,
            mainTasksOld: jobInfo.mainTasks,
            descriptionOld: jobInfo.description,
        });

        toggleEditMode();
        props.addingMode();
    }


    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setJobInfo({
            ...jobInfo,
            [name]: value,
        })
    }

    const handleCheckbox = (e) => {
        setJobInfo({
            ...jobInfo,
            endingDateNotYetFinished: e.target.checked,
        })
    }


    const handleUndo = () => {
        setJobInfo({
            companyName: jobInfoOld.companyNameOld,
            position: jobInfoOld.positionOld,
            initialDate: jobInfoOld.initialDateOld,
            endingDate: jobInfoOld.endingDateOld,
            endingDateNotYetFinished: jobInfoOld.endingDateNotYetFinishedOld,
            mainTasks: jobInfoOld.mainTasksOld,
            description: jobInfoOld.descriptionOld,
        });
        toggleEditMode();
    }



    const { companyName, position, initialDate, endingDate, endingDateNotYetFinished, mainTasks, description } = jobInfo;
    let validator = (!companyName || !position || !initialDate || (!endingDate && !endingDateNotYetFinished)) ? true : false;

    if (!editMode) {
        return (
            <div className="singleJob">
                <div className="dataContainer">
                    <h4 className="date">{initialDate} / {!endingDateNotYetFinished ? endingDate : "In progress"}</h4>
                    <h4><b>{position}</b></h4>
                    <h4><b>{companyName}</b></h4>
                    {mainTasks && <h4 className="otherData">TASKS: <b>{mainTasks}</b></h4>}
                    <h4 className="otherData">{description}</h4>
                </div>
                                    
                <div className="singleButtonsContainer">
                    <button onClick={() => toggleEditMode()}>EDIT</button>
                    <button onClick={() => props.remove(props)}>DELETE</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="singleJobEditable">
                <div className="doubleFieldContainer">
                    <div className="fieldWrapper">
                        <label>Company name</label>
                        <input
                            placeholder="* Enter the company name"
                            type="text"
                            name="companyName"
                            value={companyName}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    <div className="fieldWrapper">
                        <label>Job position</label>
                        <input
                            placeholder="* Enter your job position"
                            type="text"
                            name="position"
                            value={position}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                </div>

                <div className="singleFieldContainer">
                    <div className="fieldWrapper">
                        <label>Starting date</label>
                        <input
                            placeholder="* Enter when you started this job"
                            type="date"
                            name="initialDate"
                            value={initialDate}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                </div>
                
                <div className="doubleFieldContainer">
                    <div className="fieldWrapper">
                        <label>Ending date</label>
                        <input
                            placeholder="* Enter when you finished this job"
                            type="date"
                            name="endingDate"
                            disabled={endingDateNotYetFinished}
                            value={endingDate}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    <div className="fieldWrapperCheckbox">
                        <label>In progress</label>
                        <input
                            type="checkbox"
                            checked={endingDateNotYetFinished}
                            onChange={(event) => handleCheckbox(event)}
                        />
                    </div>                       
                </div>

                <div className="singleFieldContainer">
                    <div className="fieldWrapper">
                        <label>Main tasks</label>
                        <textarea
                            placeholder="* Enter your main tasks"
                            name="mainTasks"
                            rows="3"
                            value={mainTasks}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                </div>
                
                <div className="singleFieldContainer">
                    <div className="fieldWrapper">
                        <label>Description</label>
                        <textarea
                            placeholder="* Describe your experience"
                            name="description"
                            rows="4"
                            value={description}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                </div>
                
                {isNew //CONDITION FOR THE RENDER OF THE BUTTONS (different for new added and old element)
                    ?
                    <div className="buttonContainer">
                        <button onClick={() => handleSubmitforNewElement()} disabled={validator}>SUBMIT</button>
                        <button onClick={() => props.remove(props)}>UNDO</button>
                    </div>
                    :
                    <div className="buttonContainer">
                        <button onClick={() => handleSubmit()} disabled={validator}>SUBMIT</button>
                        <button onClick={() => handleUndo()}>UNDO</button>
                    </div>
                }
            </div>
        )
    }  
}

export default SingleJob

