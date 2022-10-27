import React from 'react';
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="w-full h-24 flex items-center justify-between bg-gray-800 text-white px-12 py-8">
            <Logo/>
            <Nav/>
        </header>
    );
};

export default Header;