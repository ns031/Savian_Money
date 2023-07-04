import React from 'react';
import './footer.css';
// import {FaPhone} from 'react-icons/fa'
// import {AiOutlineMail} from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../images/email.png'

const Footer =() => {
    return(
        <div className="footer" id="footer">
        
          <div className="contact_top">

            <div className="footer_form_container">
              <h3>Enquire Now</h3>
              <form action='https://formspree.io/f/xgejwlzr' method='POST'>
                  <input
                    type='text'
                    name='username'
                    placeholder='username'
                    autoComplete='off'
                    required
                  />

                  <input
                    type='email'
                    name='Email'
                    placeholder='Email'
                    autoComplete='off'
                    required
                  />

                  <input
                    type='number'
                    name='Number'
                    placeholder='Mobile Number'
                    autoComplete='off'
                    required
                  />

                  <input
                    type='text'
                    name='Comment'
                    placeholder='Your Comments'
                    autoComplete='off'
                    required
                  />

                  <button type="submit" id="submitbtn">
                    Submit
                  </button>

              </form>
            </div>

            <div className="contact_left">   
                <span className='contact_icon'>
                  {/* <FaPhone /> */}
                  <FontAwesomeIcon icon={faPhone} className='icons'/>
                  <p> +919310207305/ +919354970067</p>
                </span>
              
                <span className='contact_icon'>
                  {/* <AiOutlineMail /> */}
                  <FontAwesomeIcon icon={faEnvelope} className='icons'/>
                  <img src="images/email.png" alt=""/>
                  <p> contact@savianmoney.com</p>
                </span>
            </div>

          </div>
        </div>

    )
}

export default Footer;