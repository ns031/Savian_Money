import React from "react";
import './about.css'
import aboutbg from "../images/home_bg5.jpg"

export const About=()=>{
    return(
        <div className="about_container">
            <img src={aboutbg} alt="" />
            <div className="mission_container">
                <p style={{fontSize:45, fontFamily:`'Italiana', serif`,borderBottom:`1px solid gray`,marginBottom:45}}>Our Mission</p>
                <p className="mission_content" style={{fontSize:25,fontFamily:`'Nunito', sans-serif`,padding:25}}>At Savian, our mission is to provide exceptional guidance and expertise to empower our clients in making informed real estate decisions and achieving their goals We are committed to delivering personalized consulting services that optimize returns, minimize risks, and create long-term value for our clients.Through our dedication to excellence and community engagement, we aim to make a positive and lasting impact in the real estate industry</p>


            </div>

            <div className="values_container">
                <p style={{fontSize:45, fontFamily:`'Italiana', serif`,borderBottom:`1px solid gray`,marginBottom:45}} className="core_heading">Core Values</p>
                <div className="core_values_container">
                    <div className="value">
                        <p className="value_heading">Integrity</p>
                        <p className="value_content">
                             We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions. Trust is the foundation of our relationships with clients, and we believe in doing what is right, even when faced with difficult decisions.
                        </p>
                    </div>
                    <div className="value" id="value2">
                        <p className="value_heading">Integrity</p>
                        <p className="value_content">
                             We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions. Trust is the foundation of our relationships with clients, and we believe in doing what is right, even when faced with difficult decisions.
                        </p>
                    </div>
                    <div className="value">
                        <p className="value_heading">Integrity</p>
                        <p className="value_content">
                             We uphold the highest standards of honesty, transparency, and ethical conduct in all our interactions. Trust is the foundation of our relationships with clients, and we believe in doing what is right, even when faced with difficult decisions.
                        </p>
                    </div>

                </div>
            </div>
            
        </div>
    );
}