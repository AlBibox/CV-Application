import React, { Component } from 'react'

class SingleSkill extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editMode: false,
            skillName: "",        
        }

        this.handleChange = this.handleChange.bind(this);    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            isNew: true,
            editMode: true,        
        })
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode,
        })
    }


    handleSubmit() {
        this.setState({isNew: false})
        this.toggleEditMode();
        this.props.addingMode();
    }


    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({[name]: value,})
    }

 
    render() {
        const { skillName, editMode } = this.state;
        let validator = (!skillName) ? true : false;

        if (!editMode) {
            return (
                <div className="singleSkill">
                    <h4>{skillName}</h4>
                    <div className="buttons">
                        <button onClick={() => this.props.removeEl(this)}>DELETE</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="singleSkillEditable">
                    <div>
                        <label>Skill Name:</label>
                        <input
                            placeholder="* Enter the skill name"
                            type="text"
                            name="skillName"
                            value={skillName}
                            onChange={this.handleChange}
                        />
                    </div>                  
                    <div>
                        <button onClick={this.handleSubmit} disabled={validator}>SUBMIT</button>
                        <button onClick={() => this.props.removeEl(this)}>UNDO2</button>
                    </div>
                </div>
            )
        }
    }
}

export default SingleSkill
