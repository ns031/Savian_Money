import React from "react";
import '../components/home.css';



export const Home=()=>{
    return(
        <div className="home_container">
            <div className="home_container_img">
                <p>Explore builders</p>
                <input placeholder="Search here"></input> 
            </div>
            <div className="home_bottom">
                
                <p className="home_bottom_heading">Explore the Builders</p>
                <div className="builder_container">
                    builder
                </div>
        
            </div>
           
        </div>
    );
}

