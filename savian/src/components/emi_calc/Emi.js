
import {useEffect, useState} from "react"
import './emi.css'
import { tenureData } from "./constants";
import { numberWithCommas } from "./config";

export default function Emi() {

  const [cost,setCost]=useState(0);
  const [interest,setInterest]=useState(0);
  const [fee,setFee]=useState(1);
  const [downPayment,setDownPayment]=useState(0);
  const [tenure,setTenure]=useState(12);
  const [emi,setEmi]=useState(0);

  


  const calculateEMI =(downPayment)=>{

    const loanAmt= cost-downPayment ;
    const rateOfInterest= interest/100;
    const numberOfYears=tenure/12;
  
    const EMI =(loanAmt*rateOfInterest*(1+rateOfInterest)**numberOfYears)/((1+rateOfInterest)**numberOfYears-1);

    return Number(EMI/12).toFixed(0);

  };

  const calculatedownPayment= (emi)=>{
    if(!cost) return;

    const downPaymentPercent=100-(emi/calculateEMI(0))*100;
    return Number((downPaymentPercent/100)*cost).toFixed(0);


  };

  useEffect(()=>{
    if(!(cost>0)){
        setDownPayment(0);
        setEmi(0);

    }

    const emi=calculateEMI(downPayment);
    setEmi(emi);

  },[tenure]);



  const updateEMI =(e)=> {
    if(!cost) return;
    const dp=Number(e.target.value)
    setDownPayment(dp.toFixed(0));

    const emi=calculateEMI(dp);
    setEmi(emi);

  };



  const updateDownPayment =(e)=>{
    if(!cost) return;
    const emi=Number(e.target.value);
    setEmi(emi.toFixed(0));
    const dp=calculatedownPayment(emi);
    setDownPayment(dp);


  };

  var slider1=document.getElementsByClassName("slider1");
  

  

  return (
     <div className="calculator_container">
        <div className="emi_top">
            <span className="title" style={{fontSize:45,marginTop:15,color:"black"}}>
                EMI Calculator
            </span>
            
            <span className="title" style={{fontSize:20,color:"black"}}>
                Total Down Payment - {""}
                {numberWithCommas((Number(downPayment)+(cost-downPayment)*(fee/100)).toFixed(0))}
            </span>
            
            <span className="title" style={{fontSize:20,color:"black"}}>
              {" "}
              Total Loan Amount - {numberWithCommas((emi*tenure).toFixed(0))}

            </span>

        </div>
    
      <div className='inputs_container'>
        <div className='input_container'> 
          <span className="title">
            Total cost</span>
          <input type="number"
            value={cost}
            onChange={(e)=>setCost(e.target.value)}
            placeholder="Total Cost"
            /> 
        </div>

        <div className='input_container'>
          <span className="title">
            Processing Fee(in %)</span>
          <input type="number"
            value={fee}
            onChange={(e)=>setFee(e.target.value)}
            placeholder="Processing fee in %"/>
        </div>
       
        <div className='input_container'>
          <span className="title">
            Interest Rate </span>
          <input type="number"
            value={interest}
            onChange={(e)=>setInterest(e.target.value)}
            placeholder="Interest"/>
        </div>
      </div>

      <span className="title">
        Down Payment</span>
       
      <div className='slider_container'>
        <input
        type='range'
        min={0}
        max={cost}
        className="slider"
        value={downPayment}
        onChange={updateEMI}
        id="silder1"/>
        <div className='lables'>
            <lable>0%</lable>
            <b>{numberWithCommas(downPayment)}</b>
            <lable>100%</lable>
        </div>
      </div>
      
      <span className="title">Loan per month</span>
      <div className='slider_container'>
        <input 
            type='range'
            min={calculateEMI(cost)}
            max={calculateEMI(0)}
            className="slider"
            value={emi}
            onChange={updateDownPayment}/>
        <div className='lables'>
          <lable>{numberWithCommas(calculateEMI(cost))}</lable>
          <b>{numberWithCommas(emi)}</b>
          <lable>{numberWithCommas(calculateEMI(0))}</lable>
        </div>
      </div>


      <span className='title'>Tenure</span>
      <div className="tenure_container">
        {tenureData.map((t)=>{
            return(
                <button className={`tenure ${t===tenure?"selected":""}`} onClick={()=>setTenure(t)}>{t}</button>
            )
        })}
      </div>


      
    </div>
  );
}
