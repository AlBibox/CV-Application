import React, { Component } from 'react'

class GeneralInfo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editMode: false,
            firstName: "Name",
            surname: "Surname",
            jobTitle: "jobTitle",
            phone: "333 9406438",
            email: "mail@gmail.com",
            position: "myPosition",

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
        if(!this.state.firstName || !this.state.surname) return false;

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

        if (!editMode) {
            return (
                <div className="generalInfo">
                    <h1>General info</h1>
                    <h3>{firstName}</h3>
                    <h3>{surname}</h3>
                    <h4>Job title: {jobTitle}</h4>
                    <h4>Phone: {phone}</h4>
                    <h4>Email: {email}</h4>
                    <h4>Position: {position}</h4>
                    <button onClick={this.toggleEditMode}>EDIT</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>General info</h1>
                    <div>
                        <label>Name</label>
                        <input 
                            placeholder="* Enter your name" 
                            type="text"
                            name="firstName" 
                            value={firstName} 
                            onChange={this.handleChange} 
                        />
                        <label>Surname</label>
                        <input 
                            placeholder="* Enter your surname" 
                            type="text"
                            name="surname"
                            value={surname}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Job Title</label>
                        <input 
                            placeholder="* Enter your job title" 
                            type="text"
                            name="jobTitle"
                            value={jobTitle}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Phone number</label>
                        <input 
                            placeholder="* Enter your phone number" 
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            placeholder="* Enter your email" 
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Position</label>
                        <input 
                            placeholder="* Enter your position" 
                            type="text"
                            name="position"
                            value={position}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>SUBMIT</button>
                        <button onClick={this.handleUndo}>UNDO</button>
                    </div>
                </div>
            )
        }
        
    }
}

export default GeneralInfo