import React from 'react';
import Link from "next/link";

const Logo = () => {
    return (
        <h1 className="sm:text-3xl text-lg">
            <Link href="/" className="logo">Toolhub Records</Link>
        </h1>
    );
};

export default Logo;