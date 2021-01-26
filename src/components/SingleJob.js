import React, { Component } from 'react'

class SingleJob extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editMode: false,
            companyName: "",
            position: "",
            initialDate: "",
            endingDate: "",
            endingDateNotYetFinished: false,
            mainTasks: "",
            description: "",

            companyNameOld: "",
            positionOld: "",
            initialDateOld: "",
            endingDateOld: "",
            endingDateNotYetFinishedOld: "",
            mainTasksOld: "",
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
            companyNameOld: this.state.companyName,
            positionOld: this.state.position,
            initialDateOld: this.state.initialDate,
            endingDateOld: this.state.endingDate,
            endingDateNotYetFinishedOld: this.state.endingDateNotYetFinished,
            mainTasksOld: this.state.mainTasks,
            descriptionOld: this.state.description,
        })
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode,
        })
    }


    //METHOD FOR SUBMITTING OLD ELEMENTS
    handleSubmit() {
        const { companyName, position, initialDate, endingDate, endingDateNotYetFinished, mainTasks, description } = this.state;

        this.setState({
            companyNameOld: companyName,
            positionOld: position,
            initialDateOld: initialDate,
            endingDateOld: endingDate,
            endingDateNotYetFinishedOld: endingDateNotYetFinished,
            mainTasksOld: mainTasks,
            descriptionOld: description,
        })
        this.toggleEditMode();
    }


    //METHOD FOR SUBMITTING NEW ELEMENT
    handleSubmitforNewElement() {
        const { companyName, position, initialDate, endingDate, endingDateNotYetFinished, mainTasks, description } = this.state;

        this.setState({
            isNew: false,
            companyNameOld: companyName,
            positionOld: position,
            initialDateOld: initialDate,
            endingDateOld: endingDate,
            endingDateNotYetFinishedOld: endingDateNotYetFinished,
            mainTasksOld: mainTasks,
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
            companyName: this.state.companyNameOld,
            position: this.state.shoolNameOld,
            initialDate: this.state.initialDateOld,
            endingDate: this.state.endingDateOld,
            endingDateNotYetFinished: this.state.endingDateNotYetFinishedOld,
            mainTasks: this.state.mainTasksOld,
            description: this.state.descriptionOld,
        });
        this.toggleEditMode();
    }



    render() {
        const { companyName, position, initialDate, endingDate, endingDateNotYetFinished, mainTasks, description, editMode, isNew } = this.state;
        let validator = (!companyName || !position || !initialDate || (!endingDate && !endingDateNotYetFinished)) ? true : false;

        if (!editMode) {
            return (
                <div className="singleEducation">
                    <h4>Company name: {companyName}</h4>
                    <h4>Position: {position}</h4>
                    <div>
                        <h4>From: {initialDate}</h4>
                        <h4>Till: {!endingDateNotYetFinished ? endingDate : "In progress"}</h4>
                    </div>
                    <h4>Main tasks: {mainTasks}</h4>
                    <h4>Description: {description}</h4>
                    <div className="buttons">
                        <button onClick={this.toggleEditMode}>EDIT</button>
                        <button onClick={() => this.props.removeEl(this)}>DELETE</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="singleJobEditable">
                    <div>
                        <label>Company name:</label>
                        <input
                            placeholder="* Enter the company name"
                            type="text"
                            name="companyName"
                            value={companyName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Job position:</label>
                        <input
                            placeholder="* Enter your job position"
                            type="text"
                            name="position"
                            value={position}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>From:</label>
                        <input
                            placeholder="* Enter when you started this job"
                            type="date"
                            name="initialDate"
                            value={initialDate}
                            onChange={this.handleChange}
                        />
                        <label>Till:</label>
                        <input
                            placeholder="* Enter when you finished this job"
                            type="date"
                            name="endingDate"
                            disabled={endingDateNotYetFinished}
                            value={endingDate}
                            onChange={this.handleChange}
                        />
                        <label>Not yet finished</label>
                        <input
                            type="checkbox"
                            checked={endingDateNotYetFinished}
                            onChange={this.handleCheckbox}
                        />
                    </div>
                    <div>
                        <label>Main tasks:</label>
                        <textarea
                            placeholder="* Enter your main tasks"
                            name="mainTask"
                            value={mainTasks}
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
                            <button onClick={this.handleSubmitforNewElement} disabled={validator}>SUBMIT</button>
                            <button onClick={() => this.props.removeEl(this)}>UNDO2</button>
                        </div>
                        :
                        <div>
                            <button onClick={this.handleSubmit} disabled={validator}>SUBMIT</button>
                            <button onClick={this.handleUndo}>UNDO</button>
                        </div>
                    }
                </div>
            )
        }
    }
}

export default SingleJob

