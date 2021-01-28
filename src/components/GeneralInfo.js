import React, { Component } from 'react'

class GeneralInfo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editMode: false,
            firstName: "Name",
            surname: "Surname",
            jobTitle: "My specialization",
            phone: "+00 000 0000000",
            email: "yourMail@mailProvider.com",
            position: "27 Colmore Row, Birmingham, England",

            firstNameOld: "",
            surnameOld: "",
            jobTitleOld: "",
            phoneOld: "",
            emailOld: "",
            positionOld: "",     
        }

        this.handleChange = this.handleChange.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleUndo = this.handleUndo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
    }

    componentDidMount() {
        this.setState({
            firstNameOld: this.state.firstName,
            surnameOld: this.state.surname,
            jobTitleOld: this.state.jobTitle,
            phoneOld: this.state.phone,
            emailOld: this.state.email,
            positionOld: this.state.position
        })
    }

    
    toggleEditMode(){
        this.setState({
            editMode: !this.state.editMode,
        })
    }

    handleSubmit() {
        this.setState({
            firstNameOld: this.state.firstName,
            surnameOld: this.state.surname,
            jobTitleOld: this.state.jobTitle,
            phoneOld: this.state.phone,
            emailOld: this.state.email,
            positionOld: this.state.position
        })
        this.toggleEditMode();
    }

    handleChange(e){
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name] : value,
        })
    }

    
    handleUndo(){
        this.setState({
            firstName: this.state.firstNameOld,
            surname: this.state.surnameOld,
            jobTitle: this.state.jobTitleOld,
            phone: this.state.phoneOld,
            email: this.state.emailOld,
            position: this.state.positionOld,
        });
        this.toggleEditMode();
    }

    

    render() {
        const { firstName, surname, jobTitle, phone, email, position, editMode } = this.state;
        let validator = (!firstName || !surname || !jobTitle ) ? true : false;

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
                        <button onClick={this.toggleEditMode}>EDIT INFORMATION</button>
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
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="fieldWrapper">
                            <label>Surname</label>
                            <input
                                placeholder="* Enter your surname"
                                type="text"
                                name="surname"
                                value={surname}
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="fieldWrapper">
                            <label>Email</label>
                            <input
                                placeholder="* Enter your email"
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    
                                      
                    <div className="buttonContainer">
                        <button onClick={this.handleSubmit} disabled={validator}>SUBMIT</button>
                        <button onClick={this.handleUndo}>UNDO</button>
                    </div>
                </div>
            )
        }
        
    }
}

export default GeneralInfo