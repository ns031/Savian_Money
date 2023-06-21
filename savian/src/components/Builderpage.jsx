import React from "react";
import Builders from "./Builders";
import sikka from "../images/sikka_3_600x450.jpg"
import saya from "../images/Saya_logo.jpg"
import mahagun from "../images/mahagun_logo.png"

import './builderpage.css'


const Builderpage=()=>{
    return(
        <div className="builderpage_container">
            <p className="builderpage_heading">Builders</p>
            <div className="builderpage_items">
                <Builders image={saya} title="Saya" description="Saya Group fondly called as SAYA HOMES is a fast growing real estate organization with timely deliver and 2 decades of delivering excellence" address="/saya"/>
                <Builders image={sikka} title="Saya" description="Saya Group fondly called as SAYA HOMES is a fast growing real estate organization with timely deliver and 2 decades of delivering excellence" address="/sikka"/>
                <Builders image={mahagun} title="Saya" description="Saya Group fondly called as SAYA HOMES is a fast growing real estate organization with timely deliver and 2 decades of delivering excellence" address="/mahagun"/>
            </div>

            
        </div>
    );

}

export default Builderpage;