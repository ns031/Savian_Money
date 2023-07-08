import React from 'react'
import "./contact.css"
import location from "../images/location.png"
import email from "../images/mail.png"
import call from "../images/call.png"

export const Contact = () => {
  return (
    <>
    <section className='contact-section'>
      <div className="contact-container">
        <div className="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className='info'>
              <li>
                <span><img src={location} alt="" /></span>
                <span>KH NO 33/9 <br /> Street No. 30 Harsh Vihar, Delhi <br /> North East, Delhi,110093, India</span>
              </li>
              <li>
                <span><img src={email}  alt="" /></span>
                <span>contact@savianmoney.com</span>
              </li>
              <li>
                <span><img src={call} alt="" /></span>
                <span>+919310207305 <br /> +919354970067</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>

          <form action='https://formspree.io/f/mbjvjodk' method='POST' className='formBox'>

            <div className="inputBox w50">
              <input type='text' required/>
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type='text' required/>
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type='email' required/>
              <span>Email Address</span>
            </div>
            <div className="inputBox w50">
              <input type='text' required/>
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100">
              <textarea required></textarea>
              <span>Write your message here</span>
            </div>
            <div className="inputBox w100">
              <input type='submit'/>
            </div>

          </form>
        </div>
      </div>
    </section>

    <section className='contact-medium-section'>
    <div className="contact-medium-container">
      <div className="contactForm">
        <h2>Send a Message</h2>
        <form action='https://formspree.io/f/mjvqvwga' method='POST' className='formBox'>
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
<div className="contactInfo">
    <h2>Contact Info</h2>
    <ul className='info'>
      <li>
        <span><img src={location} alt="" /></span>
        <span>KH NO 33/9 <br /> Street No. 30 Harsh Vihar, Delhi <br /> North East, Delhi,110093, India</span>
      </li>
      <li>
        <span><img src={email}  alt="" /></span>
        <span>contact@savianmoney.com</span>
      </li>
      <li>
        <span><img src={call} alt="" /></span>
        <span>+919310207305 <br /> +919354970067</span>
      </li>
    </ul>
</div>
</div>
    </section>
    </>

  )
}
