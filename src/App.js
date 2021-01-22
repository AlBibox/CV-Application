import './styles/appStyle.scss';
import GeneralInfo from './components/GeneralInfo';

import Education from './components/Education';

import JobExperience from './components/JobExperience';
import SingleJob from './components/SingleJob';

import Skills from './components/Skills';
import SingleSkill from './components/SingleSkill';



import React, { Component } from 'react'



class App extends Component {
  

  render() {
    return (
      <div className="app">
        
        <GeneralInfo/>

        <Education/>
          

        <JobExperience>
          <SingleJob />
        </JobExperience>

        <Skills>
          <SingleSkill />
        </Skills>
        
      </div>
    )
  }
}


export default App;
