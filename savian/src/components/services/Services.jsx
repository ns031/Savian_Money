import React from "react";
import './Services.css';
import expert from "../../images/expert_advice.jpg";
import strategy from "../../images/strategy.jpg"
import handshake from "../../images/handshake.jpg"

export const Services=()=>{
    return(
        <div className="services_container_1">
            <p className="services_heading">Our Services</p>
            <div className="services_container">
                <div className="cards grid">
                    <div className="card">
                        <div className="img-box">
                            <img src={expert} alt=""/>

                        </div>
                        <div className="card-content">
                            <p className="card-heading">Expert Advice</p>
                            <p className="card-text">Access to knowledgeable professionals who understand the intricacies of the real estate market.  We provide expert advice and insights to help clients navigate investment opportunities and overcome challenges</p>
                        </div>                        
                    </div>
                    <div className="card">
                        <div className="img-box">
                            <img src={strategy} alt=""/>

                        </div>
                        <div className="card-content">
                            <p className="card-heading">Investment strategy</p>
                            <p className="card-text">We assist clients in developing customized investment strategies based on their goals, risk tolerance, and financial resources.We consider factors such as property type, location, and market conditions to create a tailored approach that aligns with the client's objectives</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-box">
                            <img src={handshake} alt=""/>
                        </div>
                        <div className="card-content">
                            <p className="card-heading">Client-Centric Approach</p>
                            <p className="card-text">We understand the unique needs and goals of each client. We work closely with clients, maintaining open communication and offering personalized guidance throughout the investment process</p>
                        </div>
                        
                    </div>


                </div>
            </div>

        </div>
    )
}