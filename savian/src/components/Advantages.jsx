import React from 'react'
import './Advantages.css'
import {FaCircle} from 'react-icons/fa'

const Advantages = () => {
  return (
    <div className="timeline">
        <div className="container left-container">
          <FaCircle className='circle'/>
            <div className="text-box">
                <h2>Rental Income</h2>
                <p>Real estate can generate regular income through rental payments. Owning a rental property allows investors to earn passive income and build a steady cash flow stream. Rental income can provide a consistent source of revenue and potentially cover expenses such as mortgage payments, property maintenance, and taxes.</p>
                <span className='left-container-arrow'></span>
            </div>
        </div>

        <div className="container right-container">
          <FaCircle className='circle'/>
            <div className="text-box">
                <h2>Portfolio Stability</h2>
                <p>Real estate investments can provide stability to an investment portfolio. While other asset classes like stocks may experience volatility and market fluctuations, real estate values tend to be less volatile over the long term. This stability can help balance out the overall risk profile of an investment portfolio.</p>
                <span className='right-container-arrow'></span>
            </div>
        </div>

        <div className="container left-container">
          <FaCircle className='circle'/>
            <div className="text-box">
                <h2>Tax Benefits</h2>
                <p>Real estate investments offer various tax advantages. Rental income is generally subject to lower tax rates than regular income, and investors can take advantage of tax deductions such as mortgage interest, property taxes, depreciation, and maintenance expenses. Additionally, capital gains from the sale of investment properties may qualify for favorable tax treatment.</p>
                <span className='left-container-arrow'></span>
            </div>
        </div>
    </div>
  )
}

export default Advantages
