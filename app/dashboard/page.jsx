import React from 'react'
import Header from './_component/Header'

const DashboadPage = ({ children }) => {
    return (
        <div>
            <Header />
            <h1>hello duniya</h1>
            {children}
        </div>
    )
}

export default DashboadPage