import React from 'react'

const DeepakLayout = ({ children }) => {
    return (
        <div>
            <div >
                {children} {/* This will render only the specific page content */}
            </div>
        </div>
    )
}

export default DeepakLayout
