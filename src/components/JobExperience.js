import React, { Component } from 'react';
import SingleJob from './SingleJob';
import uniqid from "uniqid";


class JobExperience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobsList: [],
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
            jobsList: this.state.jobsList.concat(<SingleJob key={uniqid()} />)
        }, () => console.log(this.state.jobsList))
    }

    removeElement(e) {
        this.setState({
           jobsList: this.state.jobsList
                .filter(item => e._reactInternals.key !== item.key)
        })

        if (this.state.addingMode) {
            this.setState({ addingMode: false })
        }
    }






    render() {
        return (
            <div className="jobExperience" >
                <h2>JOB EXPERIENCE</h2>
                {this.state.jobsList
                    .map(item =>
                        <SingleJob
                            key={item.key}
                            addingMode={this.toggleAddingMode}
                            removeEl={this.removeElement}
                        />
                    )}
                {!this.state.addingMode && <button onClick={this.addNewElement}>ADD NEW JOB</button>}

            </div>
        )
    }
}

export default JobExperience