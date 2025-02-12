import React from 'react';
import Header from '@/app/_component/Header';

const TechLayout = ({ children }) => {
    return (
        <div className='relative dark  min-h-screen'>
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-white/[0.1]  z-0">
                {/* Reduce Overlay Opacity */}
                <div className="absolute inset-0 "></div>
            </div>

            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="relative z-10">
                {children} {/* This will render only the specific page content */}
            </div>
        </div>
    );
};

export default TechLayout;
