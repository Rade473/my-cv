import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/" target='_blank' rel='noreferrer'><BsLinkedin/></a>
      <a href="https://github.com/Rade473" rel='noreferrer'target='_blank'> <FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
