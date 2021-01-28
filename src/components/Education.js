import React, { Component } from 'react';
import SingleEducation from './SingleEducation';
import uniqid from "uniqid";

class Education extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             educationList: [],
             addingMode: false
        }

        this.addNewElement = this.addNewElement.bind(this);
        this.toggleAddingMode = this.toggleAddingMode.bind(this);
        this.removeElement = this.removeElement.bind(this);
        
    }

    toggleAddingMode() {
        this.setState({
            addingMode: !this.state.addingMode,
        })
    }
    

    addNewElement() {
        this.toggleAddingMode();
        this.setState({   
            educationList: this.state.educationList.concat(<SingleEducation key={uniqid()} />)
        })
    }

    removeElement(e) {
        this.setState({
            educationList: this.state.educationList
                .filter(item => e._reactInternals.key !== item.key)
        })

        if(this.state.addingMode){
            this.setState({addingMode: false})
        }
    }


    

    
    
    render() {
        return (
            <div className = "educationBox" >
                <h2>EDUCATION LIST</h2>
                {this.state.educationList
                    .map(item => 
                        <SingleEducation
                            key={item.key}
                            addingMode={this.toggleAddingMode}
                            removeEl={this.removeElement}
                        />                    
                )}
                {!this.state.addingMode && 
                    <div className="generalButtonContainer">
                        <button onClick={this.addNewElement}>ADD NEW EDUCATION</button>
                    </div>
                }
                 
            </div>
        )
    }
}

export default Education