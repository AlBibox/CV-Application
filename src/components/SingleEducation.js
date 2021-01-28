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
            endingDateNotYetFinished: false,
            description: "",

            studyTitleOld: "",
            schoolNameOld: "",
            initialDateOld: "",
            endingDateOld: "",
            endingDateNotYetFinishedOld: "",
            descriptionOld: "",
            
        }

        this.handleChange = this.handleChange.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleUndo = this.handleUndo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitforNewElement = this.handleSubmitforNewElement.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    componentDidMount() {
        this.setState({
            isNew: true,
            editMode: true,
            studyTitleOld: this.state.studyTitle,
            schoolNameOld: this.state.schoolName,
            initialDateOld: this.state.initialDate,
            endingDateOld: this.state.endingDate,
            endingDateNotYetFinishedOld: this.state.endingDateNotYetFinished,
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
        const { studyTitle, schoolName, initialDate, endingDate, endingDateNotYetFinished, description } = this.state;
        
        this.setState({
            studyTitleOld: studyTitle,
            schoolNameOld: schoolName,
            initialDateOld: initialDate,
            endingDateOld: endingDate,
            endingDateNotYetFinishedOld: endingDateNotYetFinished,
            descriptionOld: description,
        })
        this.toggleEditMode();        
    }


    //METHOD FOR SUBMITTING NEW ELEMENT
    handleSubmitforNewElement(){
        const {studyTitle, schoolName, initialDate, endingDate, endingDateNotYetFinished, description} = this.state;
        
        this.setState({
            isNew: false,
            studyTitleOld: studyTitle,
            schoolNameOld: schoolName,
            initialDateOld: initialDate,
            endingDateOld: endingDate,
            endingDateNotYetFinishedOld: endingDateNotYetFinished,
            descriptionOld: description,
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

    handleCheckbox(e) {
        this.setState({
            endingDateNotYetFinished: e.target.checked,
        })
    }


    handleUndo() {
        this.setState({
            studyTitle: this.state.studyTitleOld,
            schoolName: this.state.schoolNameOld,
            initialDate: this.state.initialDateOld,
            endingDate: this.state.endingDateOld,
            endingDateNotYetFinished: this.state.endingDateNotYetFinishedOld,
            description: this.state.descriptionOld,
        });
        this.toggleEditMode(); 
    }

   
    
    render() {
        const { studyTitle, schoolName, initialDate, endingDate, endingDateNotYetFinished, description, editMode, isNew } = this.state;
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
                        <button onClick={this.toggleEditMode}>EDIT</button>
                        <button onClick={() => this.props.removeEl(this)}>DELETE</button>
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
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="fieldWrapper">
                            <label>School name</label>
                            <input
                                placeholder="* Enter the school name"
                                type="text"
                                name="schoolName"
                                value={schoolName}
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="fieldWrapperCheckbox">
                            <label>In progress</label>
                            <input
                                type="checkbox"
                                checked={endingDateNotYetFinished}
                                onChange={this.handleCheckbox}
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
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                       
                    {isNew //CONDITION FOR THE RENDER OF THE BUTTONS (different for new added and old element)
                        ?  
                            <div className="buttonContainer">
                                <button onClick={this.handleSubmitforNewElement} disabled={validator}>SUBMIT</button>                                   
                                <button onClick={() => this.props.removeEl(this)}>UNDO</button>
                            </div> 
                        :
                            <div className="buttonContainer">
                                <button onClick={this.handleSubmit} disabled={validator}>SUBMIT</button>
                                <button onClick={this.handleUndo}>UNDO</button>
                            </div>  
                    }                              
                </div>
            )
        }  
    }
}

export default SingleEducation

