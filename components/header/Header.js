import React from 'react';
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="w-full h-20 flex items-center justify-between bg-blue-500 text-white md:px-12 px-4 py-8">
            <Logo/>
            <Nav/>
        </header>
    );
};

export default Header;