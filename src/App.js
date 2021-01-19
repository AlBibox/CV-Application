import './styles/mainStyle.scss';

import GeneralInfo from './components/GeneralInfo';

import Education from './components/Education';
import SingleEducation from './components/SingleEducation';

import JobExperience from './components/JobExperience';
import SingleJob from './components/SingleJob';

import Skills from './components/Skills';
import SingleSkill from './components/SingleSkill';



import React, { Component } from 'react'


const USER = {
  name: "Alberto Benedetto",
  phone: "333 9406438",
  email: "mail@gmail.com",
  position: "myPosition"
}


class App extends Component { 
  render() {
    return (
      <div>
        <GeneralInfo 
          name={USER.name}
          phone={USER.phone}
          email={USER.email}
          position={USER.position}
        />

        <Education>
          <SingleEducation />
        </Education>

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
