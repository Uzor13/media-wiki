import React from 'react';
import Table from "../components/ui/Table";
import Head from "next/head";

const Leaderboard = () => {
    return (
        <>
            <Head>
                <title>Leaderboard</title>
            </Head>
            <div>
                <div className="md:px-12 px-6 mt-8">
                    <h1 className="md:text-4xl text-3xl mt-8 md:ml-40">Leaderboard <i
                        className="fas fa-trophy text-yellow-500"/></h1>
                    <p className="md:text-xl text-lg mt-2 md:ml-40">Our top toolhub editors of the day</p>
                    <div className="flex justify-center">
                        <div
                            className="not-prose relative bg-slate-50 mt-8 mb-8 rounded-lg md:w-9/12 w-full overflow-hidden dark:bg-slate-500/25">
                            <div style={{backgroundPosition: "10px 10px"}}
                                 className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
                            <div className="relative rounded-xl overflow-auto">
                                <div className="shadow-sm overflow-hidden my-8">
                                    <Table/>
                                </div>
                            </div>
                            <div
                                className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Leaderboard;