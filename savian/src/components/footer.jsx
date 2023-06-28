import React from 'react';
import './footer.css';

const Footer =() => {
    return(
        <div className="contact" id="contact">
        
          <div className="contact_top">
            <div className="contact_left">   
              <h4>Contact Us</h4>
              <p>+919310207305</p>
              <p>+919354970067</p>
              <p>contact@savianmoney.com</p>
            </div>

            <div className="footer_form_container">
              <h4>Enquire Now</h4>
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

          </div>
          <p class="disclaimer">Disclaimer:This site is for information purpose only and should not be treated as the official information.</p>
        </div>

    )
}

export default Footer;