import React, { useState, useEffect } from 'react'

const SingleEducation = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [isNew, setIsNew] = useState(true);

    const [educationInfo, setEducationInfo] = useState({
        studyTitle: "",
        schoolName: "",
        initialDate: "",
        endingDate: "",
        endingDateNotYetFinished: false,
        description: "",
    });

    const [educationInfoOld, setEducationInfoOld] = useState({
        studyTitleOld: "",
        schoolNameOld: "",
        initialDateOld: "",
        endingDateOld: "",
        endingDateNotYetFinishedOld: "",
        descriptionOld: "",
    });
    
     
    useEffect(() => {
        setIsNew(true);
        setEditMode(true);
        setEducationInfoOld({
            studyTitleOld: educationInfo.studyTitle,
            schoolNameOld: educationInfo.schoolName,
            initialDateOld: educationInfo.initialDate,
            endingDateOld: educationInfo.endingDate,
            endingDateNotYetFinishedOld: educationInfo.endingDateNotYetFinished,
            descriptionOld: educationInfo.description,
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

   

    const toggleEditMode = () => {
        setEditMode(!editMode)  
    };


    //METHOD FOR SUBMITTING OLD ELEMENTS
    const handleSubmit = () => {
        setEducationInfoOld({
            studyTitleOld: educationInfo.studyTitle,
            schoolNameOld: educationInfo.schoolName,
            initialDateOld: educationInfo.initialDate,
            endingDateOld: educationInfo.endingDate,
            endingDateNotYetFinishedOld: educationInfo.endingDateNotYetFinished,
            descriptionOld: educationInfo.description,
        })
        toggleEditMode();        
    }


    //METHOD FOR SUBMITTING NEW ELEMENT
    const handleSubmitforNewElement = () => {        
        setIsNew(false);

        setEducationInfoOld({
            studyTitleOld: educationInfo.studyTitle,
            schoolNameOld: educationInfo.schoolName,
            initialDateOld: educationInfo.initialDate,
            endingDateOld: educationInfo.endingDate,
            endingDateNotYetFinishedOld: educationInfo.endingDateNotYetFinished,
            descriptionOld: educationInfo.description,
        });
        
        toggleEditMode();
        props.addingMode();
    }


    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setEducationInfo({
            ...educationInfo,
            [name]: value,
        })
    }


    const handleCheckbox = (e) => {
        setEducationInfo({
            ...educationInfo,
            endingDateNotYetFinished: e.target.checked,
        })
    }


    const handleUndo = () => {
        setEducationInfo({
            studyTitle: educationInfoOld.studyTitleOld,
            schoolName: educationInfoOld.schoolNameOld,
            initialDate: educationInfoOld.initialDateOld,
            endingDate: educationInfoOld.endingDateOld,
            endingDateNotYetFinished: educationInfoOld.endingDateNotYetFinishedOld,
            description: educationInfoOld.descriptionOld,
        });
        toggleEditMode(); 
    }

   
    const { studyTitle, schoolName, initialDate, endingDate, endingDateNotYetFinished, description} = educationInfo;
    let validator = (!studyTitle || !schoolName || !initialDate || (!endingDate && !endingDateNotYetFinished)) ? true : false;

    if(!editMode){
        return (
            <div className="singleEducation">
                <div className="dataContainer">
                    <h4 className="date">{initialDate} / {!endingDateNotYetFinished ? endingDate : "In progress"}</h4>
                        <h4><b>{studyTitle}</b></h4>  
                        <h4><b>{schoolName}</b></h4>
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
            <div className="singleEducationEditable">

                <div className="doubleFieldContainer">
                    <div className="fieldWrapper">
                        <label>Title of study</label>
                        <input
                            placeholder="* Enter the title of study"
                            type="text"
                            name="studyTitle"
                            value={studyTitle}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    <div className="fieldWrapper">
                        <label>School name</label>
                        <input
                            placeholder="* Enter the school name"
                            type="text"
                            name="schoolName"
                            value={schoolName}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                </div>

                <div className="singleFieldContainer">
                    <div className="fieldWrapper">
                        <label>Starting date</label>
                        <input
                            placeholder="* Enter when you started this study"
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
                            placeholder="* Enter when you finished this study"
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
export default SingleEducation

