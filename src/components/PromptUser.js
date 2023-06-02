import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputItem from './InputItem'
import { HiArrowRight } from 'react-icons/hi'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { GiAges } from 'react-icons/gi'
import { FaBirthdayCake } from 'react-icons/fa'
import { MdOutlineSchool } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'
import 'animate.css'
import Resume from './Resume'

const PromptUser = ({ handleChange, imageSource, userObject }) => {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(false);

  const OnButtonClick = () => {
    alert(`WINDOWS DIMENSION : ${window.innerWidth}, ${window.innerHeight}`);
    setButtonClicked(true);
    navigate('/resume')
  }

  return (
    <>
      {buttonClicked ? <Resume userObject={userObject} imageSource={imageSource} /> : <div className='prompt-container animate_animated animate_bounce'>
        <h3 className='title1'> PERSONAL DETAILS </h3>
        <div className='inputs'>
          <InputItem className='first-name' autoComplete="off" onChange={handleChange} label='First Name' placeholder='Enter your first name' name='firstname' />
          <InputItem className='last-name' autoComplete="off" onChange={handleChange} label='Last Name' placeholder='Enter your last name' name='lastname' />
          <InputItem className='email' autoComplete="off" onChange={handleChange} label={<AiOutlineMail />} placeholder='Enter your email' name='email' />
          <InputItem className='phone' autoComplete="off" onChange={handleChange} label={<BsTelephone />} placeholder='Enter your phone number' name='phonenumber' />
          <InputItem className='web' autoComplete="off" onChange={handleChange} label={<CgWebsite />} placeholder='Enter your website' name='website' />
          <InputItem className='birth-date' autoComplete="off" onChange={handleChange} label={<FaBirthdayCake />} type='date' name='dob' />
          <InputItem className='age' autoComplete="off" onChange={handleChange} label={<GiAges />} type='number' placeholder='Enter your age' name='age' />
        </div>
        <h3 className='title2'> OTHER DETAILS </h3>
        <div className='inputs2'>

          <InputItem className='ski' autoComplete="off" onChange={handleChange} label='Skills' placeholder='List one relevant skill' name='skills' />
          <InputItem className='lan' autoComplete="off" onChange={handleChange} label='Languages Known' placeholder='Enter languages' name='languages' />
          <InputItem className='ca' autoComplete="off" onChange={handleChange} label='Career Objective' placeholder='Whats your career objective?' name='careerobj' gridColumns="span 1" />
          <InputItem className='un' autoComplete="off" onChange={handleChange} label='University' placeholder='Enter University name' name='university' gridColumns="span 1" />
          <InputItem className='ex' autoComplete="off" onChange={handleChange} label={<MdOutlineSchool />} placeholder='Enter your experience' name='experience' />
          <InputItem className='acq' autoComplete="off" onChange={handleChange} label='Academic Qualifications' placeholder='Enter your Academic Qualifications' name='aq' />
          <InputItem className='certi' autoComplete="off" onChange={handleChange} label='Certifications' placeholder='List your Certifications' name='certifications' />
          <InputItem className='proj' autoComplete="off" onChange={handleChange} label='Projects' placeholder='List your project names with details' name='projects' />
          <InputItem className='profile' autoComplete="off" onChange={handleChange} placeholder='Write about yourself' name='profile' isTextArea={true} />
        </div>
        <button className='generate-button' onClick={OnButtonClick}> Generate Resume <HiArrowRight /> </button>

      </div>}
    </>
  )
}

export default PromptUser


