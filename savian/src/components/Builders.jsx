import React from "react";
import './builders.css'
import { NavLink } from "react-router-dom";

const Builders=({image,title,description,address})=>{
    return(
        <div className="builders_container">
            <img src={image}/>
            <div className="builder_info">
                <p>{title}</p>
                <p>{description}</p>
                <NavLink to={address}><button>Projects</button></NavLink>
            </div>
            

        </div>
    );
}

export default Builders;