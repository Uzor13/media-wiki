import React from 'react';
import Link from "next/link";

const Logo = () => {
    return (
        <h1 className="text-3xl">
            <Link href="/" className="logo">Toolhub Records Management</Link>
        </h1>
    );
};

export default Logo;