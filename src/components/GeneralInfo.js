import React, { useState, useEffect } from 'react'

const GeneralInfoHooks = () => {
    const [editMode, setEditMode] = useState(false);

    const [generalInfo, setGeneralInfo] = useState({
        firstName: "Name",
        surname: "Surname",
        jobTitle: "My specialization",
        phone: "+00 000 0000000",
        email: "yourMail@mailProvider.com",
        position: "27 Colmore Row, Birmingham, England",

    });

    const [generalInfoOld, setGeneralInfoOld] = useState({
        firstNameOld: "",
        surnameOld: "",
        jobTitleOld: "",
        phoneOld: "",
        emailOld: "",
        positionOld: "",
    });


    useEffect(() => {
        setGeneralInfoOld({
            firstNameOld: generalInfo.firstName,
            surnameOld: generalInfo.surname,
            jobTitleOld: generalInfo.jobTitle,
            phoneOld: generalInfo.phone,
            emailOld: generalInfo.email,
            positionOld: generalInfo.position,
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

        
    const toggleEditMode = () => {
        setEditMode(!editMode)
    };


    const handleSubmit = () => {
        setGeneralInfoOld({
            firstNameOld: generalInfo.firstName,
            surnameOld: generalInfo.surname,
            jobTitleOld: generalInfo.jobTitle,
            phoneOld: generalInfo.phone,
            emailOld: generalInfo.email,
            positionOld: generalInfo.position,
        });
        toggleEditMode();
    };


    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setGeneralInfo({
            ...generalInfo,
            [name]:value,
        });  
    };


    const handleUndo = () => {
        setGeneralInfo({
            firstName: generalInfoOld.firstNameOld,
            surname: generalInfoOld.surnameOld,
            jobTitle: generalInfoOld.jobTitleOld,
            phone: generalInfoOld.phoneOld,
            email: generalInfoOld.emailOld,
            position: generalInfoOld.positionOld,
        });  
        toggleEditMode();
    };


    const {firstName, surname, jobTitle, phone, email, position} = generalInfo;
    let validator = (!firstName || !surname || !jobTitle) ? true : false;

    if (!editMode) {
        return (
            <div className="generalInfo">
                <div className="outputWrapper">
                    <h3>{firstName} {surname}</h3>
                    <h4>{jobTitle}</h4>
                </div>
                <div className="outputWrapper">
                    <h5>{phone}</h5>
                    <h5><a href={`mailto:${email}`}>{email}</a></h5>
                    <h5>{position}</h5>
                </div>
                    <div className="buttonContainer">
                        <button onClick={() => toggleEditMode()}>EDIT INFORMATION</button>
                    </div>
                </div>
        )
    } else {
        return (
            <div className="generalInfoEditable">
                <div className="doubleFieldContainer">
                    <div className="fieldWrapper">
                        <label>Name</label>
                        <input
                            placeholder="* Enter your name"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    <div className="fieldWrapper">
                        <label>Surname</label>
                        <input
                            placeholder="* Enter your surname"
                            type="text"
                            name="surname"
                            value={surname}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                </div>
                <div className="singleFieldContainer">
                    <div className="fieldWrapper">
                        <label>Job Title</label>
                        <input
                            placeholder="* Enter your job title"
                            type="text"
                            name="jobTitle"
                            value={jobTitle}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                </div>
                <div className="doubleFieldContainer">
                    <div className="fieldWrapper">
                        <label>Phone number</label>
                        <input
                            placeholder="* Enter your phone number"
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    <div className="fieldWrapper">
                        <label>Email</label>
                        <input
                            placeholder="* Enter your email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                </div>

                <div className="singleFieldContainer">
                    <div className="fieldWrapper">
                        <label>Position</label>
                        <input
                            placeholder="* Enter your position"
                            type="text"
                            name="position"
                            value={position}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                </div>

                <div className="buttonContainer">
                    <button onClick={() => handleSubmit()} disabled={validator}>SUBMIT</button>
                    <button onClick={() => handleUndo()}>UNDO</button>
                </div>
            </div>
        )
    }  
}
export default GeneralInfoHooks