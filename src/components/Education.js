import React, { Component } from 'react';
import SingleEducation from './SingleEducation';

class Education extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             educationList: [],
             addingMode: false
        }

        this.addNewEducation = this.addNewEducation.bind(this);
        this.toggleAddingMode = this.toggleAddingMode.bind(this);
        
    }

    toggleAddingMode() {
        this.setState({
            addingMode: !this.state.addingMode,
        }, () => console.log(this.state.addingMode))
    }

    addNewEducation() {
        this.toggleAddingMode();
        this.setState({   
            educationList: this.state.educationList.concat(<SingleEducation />)
        })
    }


    

    
    
    render() {
        return (
            <div className = "educationBox" >
                <h2>EDUCATION</h2>
                {this.state.educationList.map(() => <SingleEducation addingMode={this.toggleAddingMode}/>)}
                {!this.state.addingMode && <button onClick={this.addNewEducation}>ADD EDUCATION</button>}
                 
            </div>
        )
    }
}

export default Education