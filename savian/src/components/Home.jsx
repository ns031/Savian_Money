import React from "react";
import '../components/home.css';
import Builders from "./Builders";
import sikka from "../images/sikka_3_600x450.jpg"
import saya from "../images/Saya_logo.jpg"
import mahagun from "../images/mahagun_logo.png"
import { NavLink } from "react-router-dom";

export const Home=()=>{
    return(
        <div className="home_container">
            <div className="home_container_img">
                <p className="home_heading">Explore builders</p>
                <input placeholder="Search here"></input> 
            </div>
            <div className="home_bottom">
                
                <p className="home_bottom_heading">Explore the Builders</p>
                <div className="builder_container">
                    <Builders image={saya} title="Saya" description="Saya Group fondly called as SAYA HOMES is a fast growing real estate organization with timely deliver and 2 decades of delivering excellence"/>
                    <Builders image={sikka} title="Saya" description="Saya Group fondly called as SAYA HOMES is a fast growing real estate organization with timely deliver and 2 decades of delivering excellence"/>
                    <Builders image={mahagun} title="Saya" description="Saya Group fondly called as SAYA HOMES is a fast growing real estate organization with timely deliver and 2 decades of delivering excellence"/>
                </div>
                <NavLink to='/builderpage'><button>Find More...</button></NavLink>
        
            </div>
            
           
        </div>
    );
}

