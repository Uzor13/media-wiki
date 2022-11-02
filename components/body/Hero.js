import React from 'react';

const Hero = () => {
    return (
        <div>
            <h1 className="text-center md:text-4xl text-2xl mt-12">Hi <span className="text-blue-500 span">Bandito!</span> Welcome to ToolHub Record Management</h1>
            <p className="text-center md:text-lg text-base mt-3">You can select a tool you would like to add information to its missing fields below</p>
        </div>
    );
};

export default Hero;