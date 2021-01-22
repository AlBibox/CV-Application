import React, { Component } from 'react'

class SingleEducation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editMode: false,
            studyTitle: "",
            schoolName: "",
            initialDate: "",
            endingDate: "",
            description: "",

            studyTitleOld: "",
            schoolNameOld: "",
            initialDateOld: "",
            endingDateOld: "",
            descriptionOld: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleUndo = this.handleUndo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitforNewElement = this.handleSubmitforNewElement.bind(this);
    }

    componentDidMount() {
        this.setState({
            isNew: true,
            editMode: true,
            studyTitleOld: this.state.studyTitle,
            schoolNameOld: this.state.schoolName,
            initialDateOld: this.state.initialDate,
            endingDateOld: this.state.endingDate,
            descriptionOld: this.state.description,
        })
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode,
        })  
    }


    //METHOD FOR SUBMITTING OLD ELEMENTS
    handleSubmit(){
        if (!this.state.studyTitle) return false;

        this.setState({
            studyTitleOld: this.state.studyTitle,
            schoolNameOld: this.state.schoolName,
            initialDateOld: this.state.initialDate,
            endingDateOld: this.state.endingDate,
            descriptionOld: this.state.description,
        })
        this.toggleEditMode();        
    }


    //METHOD FOR SUBMITTING NEW ELEMENT
    handleSubmitforNewElement(){
        if (!this.state.studyTitle) return false;

        this.setState({
            isNew: false,
            studyTitleOld: this.state.studyTitle,
            schoolNameOld: this.state.schoolName,
            initialDateOld: this.state.initialDate,
            endingDateOld: this.state.endingDate,
            descriptionOld: this.state.description,
        })
        this.toggleEditMode();
        this.props.addingMode();
    }


    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value,
        })
    }


    handleUndo() {
        if (!this.state.studyTitle) return false;
        
        this.setState({
            studyTitle: this.state.studyTitleOld,
            schoolName: this.state.shoolNameOld,
            initialDate: this.state.initialDateOld,
            endingDate: this.state.endingDateOld,
            description: this.state.descriptionOld,
        });
        this.toggleEditMode();
        
        
    }
    
    render() {
        const { studyTitle, schoolName, initialDate, endingDate, description, editMode, isNew } = this.state;

        if(!editMode){
            return (
                <div className="singleEducation">
                    <h4>Title of study: {studyTitle}</h4>
                    <h4>School name: {schoolName}</h4>
                    <div>
                        <h4>From: {initialDate}</h4>
                        <h4>Till: {endingDate}</h4>
                    </div>
                    <h4>Description: {description}</h4>        
                    <div className="buttons">
                        <button onClick={this.toggleEditMode}>EDIT</button>
                        <button>DELETE</button>
                    </div>   
                </div>
            )
        } else {
            return (
                <div className="singleEducationEditable">
                    <div>
                        <label>Title of study:</label>
                        <input
                            placeholder="* Enter the title of study"
                            type="text"
                            name="studyTitle"
                            value={studyTitle}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <label>School name:</label>
                        <input
                            placeholder="* Enter the school name"
                            type="text"
                            name="schoolName"
                            value={schoolName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>From:</label>
                        <input
                            placeholder="* Enter when you started this study"
                            type="date"
                            name="initialDate"
                            value={initialDate}
                            onChange={this.handleChange}
                        />
                        <label>Till:</label>
                        <input
                            placeholder="* Enter when you finished this study"
                            type="date"
                            name="endingDate"
                            value={endingDate}
                            onChange={this.handleChange}  
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea
                            placeholder="* Describe your experience"
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </div>    
                        {isNew //CONDITION FOR THE RENDER OF THE BUTTONS (different for new added and old element)
                            ?  
                                <div>
                                    <button onClick={this.handleSubmitforNewElement}>SUBMIT</button>
                                    <button>DELETE</button>
                                </div> 
                            :
                                <div>
                                    <button onClick={this.handleSubmit}>SUBMIT</button>
                                    <button onClick={this.handleUndo}>UNDO</button>
                                </div>  
                        }                              
                </div>
            )
        }  
    }
}

export default SingleEducation

