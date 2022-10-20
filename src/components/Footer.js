import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaSearchLocation, FaTwitter, FaPhone} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
            <div>
                <p>123 Acme Street</p>
                <h4>Houston, TX</h4>
            </div>
            </div>
        <div className='phone'>
          <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} />817-555-1212</h4>
        </div>
        <div className='email'>
          <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} />trips@galexyTravel.com</h4>
        </div>

        </div>
        <div className='right'>
          <h4>About the Company</h4>
          <p>
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but 
          </p>
          <div className='social'>
            <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
            <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
            <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer