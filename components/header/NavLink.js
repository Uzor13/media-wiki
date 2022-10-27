import React from 'react';
import Link from "next/link";

const NavLink = () => {
    return (
        <ul className="flex gap-8 text-lg">
           <Link href="/leaderboard">Leaderboard</Link>
           <Link href="/dashboard">Record Dashboard</Link>
        </ul>
    );
};

export default NavLink;