import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { BsTelephone } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import education from 'E:/Internships/syncinterns/task3/resumebuilder/src/images/education.png'
import contact from 'E:/Internships/syncinterns/task3/resumebuilder/src/images/contact.png'
import personal from 'E:/Internships/syncinterns/task3/resumebuilder/src/images/personal.png'
import projects from 'E:/Internships/syncinterns/task3/resumebuilder/src/images/project.png'
import certificate from 'E:/Internships/syncinterns/task3/resumebuilder/src/images/certificate.png'
import goal from 'E:/Internships/syncinterns/task3/resumebuilder/src/images/goal.png'


const Resume = ({ imageSource, userObject, certifications }) => {

  return (
    <div className='resume-card'>

      <div className='pfp'>
        <img alt={`${userObject.firstname}'s profile`} src={imageSource} />
      </div>
      <div className='section-1'>
        <h1 className='full-name'>{userObject.firstname} {userObject.lastname}</h1>
        <p className='profile-info'> {userObject.profile}</p>
      </div>

      <div className='section section-6'>
        <h2 className='horizontal'><img src={goal} className='icon' alt='career' />&nbsp;&nbsp;&nbsp;CAREER OBJECTIVE</h2>
        <p className='careerobj'>{userObject.careerobj}</p>
      </div>

      <div className='section section-6'>
        <h2 className='horizontal'><img src={education} className='icon' alt='academics' />&nbsp;&nbsp;&nbsp;ACADEMIC QUALIFICATIONS</h2>
        <p className='aq'>{userObject.aq}</p>
      </div>

      <div className='section section-6'>
        <h2 className='horizontal'><img src={certificate} className='icon' alt='certifications' />&nbsp;&nbsp;&nbsp;CERTIFICATIONS</h2>
        <p className='certifications'>{userObject.certifications}</p>
      </div>

      <div className='section section-6'>
        <h2 className='horizontal'><img src={projects} className='icon' alt='projects' />&nbsp;&nbsp;&nbsp;PROJECTS</h2>
        <p className='projects'>{userObject.projects}</p>
      </div>

      <div className='section section-6 column'>
        <h2 className='horizontal'><MdWork className='icon' alt='experience' />&nbsp;&nbsp;&nbsp;WORK EXPERIENCE</h2>
        <p className='experience'>{userObject.experience}</p>
      </div>

      <div className='section section-6'>
        <h2 className='horizontal'><img src={require('E:/Internships/syncinterns/task3/resumebuilder/src/images/skill.png')} className='icon' alt='skills' />&nbsp;&nbsp;&nbsp;SKILLS</h2>
        <p className='skills'>{userObject.skills}</p>
      </div>

      <div className='section section-6'>
        <h2 className='horizontal'><img src={personal} className='icon' alt='personal details' />&nbsp;&nbsp;&nbsp;PERSONAL DETAILS</h2>
        <ul className='personal'>
          <li className='dob'><b> Date of Birth: </b>{userObject.dob}</li>
          <li className='age'> <b>Age: </b>{userObject.age} years old</li>
          <li className='languages'><b>Languages Known:</b> {userObject.languages}</li>
        </ul>
      </div>

      <div className='section section-6'>
        <h2 className='horizontal'><img src={contact} className='icon' alt='contact' />&nbsp;&nbsp;&nbsp;CONTACT DETAILS</h2>
        <ul className='contact'>
          <li className='phoneNumber'><BsTelephone className='icon' />{userObject.phonenumber}</li>
          <li className='email'><AiOutlineMail className='icon' />{userObject.email}</li>
          {userObject.website ? <li className='website'><CgWebsite className='icon' />{userObject.website}</li> : ''}
        </ul>
      </div>

    </div>
  )
}

export default Resume