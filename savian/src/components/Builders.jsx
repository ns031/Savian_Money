import React from "react";
import './builders.css'

const Builders=({image,title,description})=>{
    return(
        <div className="builders_container">
            <img src={image}/>
            <div className="builder_info">
                <p>{title}</p>
                <p>{description}</p>
                <button>Read More..</button>
            </div>
            

        </div>
    );
}

export default Builders;