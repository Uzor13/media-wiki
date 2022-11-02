import React from 'react';
import Link from "next/link";

const NavLink = () => {
    return (
        <ul className="flex md:gap-8 gap-4 md:text-lg text-base">
           <Link href="/leaderboard">Leaderboard</Link>
           <Link href="/dashboard">Dashboard</Link>
        </ul>
    );
};

export default NavLink;