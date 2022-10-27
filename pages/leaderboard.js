import React from 'react';
import Header from "../components/header/Header";

const Leaderboard = () => {
    return (
        <div>
            <Header/>
            <div className="px-12 mt-8">
                <h1 className="text-4xl">Leaderboard</h1>
                <table>
                    <thead>
                        <tr>
                           <th>No</th>
                           <th>User</th>
                           <th>Edits</th>
                        </tr>
                    </thead>
                </table>
            </div>

        </div>
    );
};

export default Leaderboard;