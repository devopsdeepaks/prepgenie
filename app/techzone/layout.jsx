import React from 'react'
import Header from '../deepak/_component/Header'



const TechLayout = ({ children }) => {
    return (
        <div className='dark'>
            {/* <Header /> */}
            {children}
        </div>
    )
}

export default TechLayout