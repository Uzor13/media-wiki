import React from 'react';
import Card from "../components/ui/Card";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import Head from "next/head";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    BarElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    height: "100vh",
    plugins: {
        title: {
            display: true,
            text: 'Missing fields data',
        },
    },
};

const labels = ['wikidata_qid', 'replaced_by', 'icon', 'tool_type', 'repository', 'api_url', 'translate_url', 'bugtracker_url', 'subtitle', 'openhub_id', 'bot_username'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Missing Tools',
            data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Edited Tools',
            data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div className="md:px-16 px-6">
                <h1 className="md:text-4xl text-2xl mt-8 mb-4">Dashboard</h1>
                <div className="flex md:flex-row flex-col justify-center md:gap-4 gap-8">
                    <Card classes="w-full h-48 rounded-lg bg-slate-100 shadow-md px-4 py-3">
                        <h2 className="md:text-xl text-lg">Tools Record Information</h2>
                        <div className="flex justify-around w-full h-full">
                            <Card classes="w-5/12 shadow-md h-4/6 mt-3 rounded-md bg-white py-2 md:px-8 px-5 text-sm">
                                <div className="flex items-center md:gap-6 gap-2 w-full h-full">
                                    <div>
                                        <i className="fas fa-tools md:text-4xl text-xl text-slate-700"/>
                                    </div>
                                    <div>
                                        <p>Tools in Record</p>
                                        <h1 className="font-bold md:text-5xl text-2xl">{Number(10394).toLocaleString()}</h1>
                                    </div>
                                </div>
                            </Card>
                            <Card classes="w-5/12 shadow-md h-4/6 mt-3 rounded-md bg-white py-2 md:px-8 px-5 text-sm">
                                <div className="flex items-center md:gap-6 gap-2 w-full h-full">
                                    <div>
                                        <i className="fas fa-ban md:text-4xl text-xl text-slate-700"/>
                                    </div>
                                    <div className="w-full">
                                        <p>Tools with Missing Information</p>
                                        <h1 className="font-bold md:text-5xl text-2xl">{Number(321).toLocaleString()}</h1>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Card>
                    <Card classes="w-full h-48 rounded-lg bg-slate-100 shadow-md px-4 py-3">
                        <h2 className="md:text-xl text-lg">Tools Record Statistics</h2>
                        <div className="flex justify-around w-full h-full">
                            <Card classes="w-full shadow-md h-4/6 mt-3 rounded-md bg-white py-2 md:px-8 px-5 text-sm">
                                <div className="flex items-center md:gap-6 gap-2 w-full h-full">
                                    <div>
                                        <i className="fas fa-percent md:text-4xl text-xl text-slate-700"/>
                                    </div>
                                    <div className="gap-2 flex flex-col">
                                        <p>percentage of tools with missing information / total number of tools</p>
                                        <h1 className="font-bold md:text-5xl text-2xl">{Number(13).toLocaleString()}%</h1>
                                    </div>
                                </div>

                            </Card>
                        </div>

                    </Card>
                </div>
                <div className="flex justify-center gap-4 mt-8">
                    <Card classes="w-full h-48 rounded-lg bg-slate-100 shadow-md px-4 py-3">
                        <h2 className="md:text-xl text-lg">Tools Edit Record Information</h2>
                        <div className="flex justify-around w-full h-full">
                            <Card classes="w-5/12 shadow-md h-4/6 mt-3 rounded-md bg-white py-2 md:px-8 px-4 text-sm">
                                <div className="flex items-center md:gap-6 gap-2 w-full h-full">
                                    <div>
                                        <i className="fas fa-edit md:text-4xl text-xl text-slate-700"/>
                                    </div>
                                    <div>
                                        <p>Tools Edited</p>
                                        <h1 className="font-bold md:text-5xl text-2xl">{Number(1004).toLocaleString()}</h1>
                                    </div>
                                </div>

                            </Card>
                            <Card classes="w-5/12 shadow-md h-4/6 mt-3 rounded-md bg-white py-2 md:px-8 px-4 text-sm">
                                <div className="flex items-center md:gap-6 gap-2 w-full h-full">
                                    <div>
                                        <i className="fas fa-user md:text-4xl text-xl text-slate-700"/>
                                    </div>
                                    <div>
                                        <p>Users Edits Per Day</p>
                                        <h1 className="font-bold md:text-5xl text-2xl">{Number(896).toLocaleString()}</h1>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Card>
                </div>
                <div className="flex justify-center gap-4 mt-12">
                    <Card classes="w-full md:h-72 h-48 rounded-lg bg-slate-100 shadow-md px-4 py-3">
                        <div className="flex justify-center gap-12">
                            <Card classes="w-5/12 shadow-md h-full mt-3 rounded-md bg-white py-2 px-8 text-sm">
                                <Bar options={options} data={data}/>
                            </Card>
                            <Card classes="w-5/12 shadow-md h-full mt-3 rounded-md bg-white py-2 px-8 text-sm">
                                <Line options={options} data={data}/>
                            </Card>
                        </div>
                    </Card>
                </div>
                <div className="flex md:flex-row flex-col justify-center gap-4 mt-12">
                    <Card classes="w-full h-48 rounded-lg bg-slate-100 shadow-md px-4 py-3">
                        <h2 className="md:text-xl text-lg">Outdated Tools Record Information</h2>
                        <div className="flex justify-around w-full h-full">
                            <Card classes="w-5/12 shadow-md h-4/6 mt-3 rounded-md bg-white py-2 md:px-8 px-4 text-sm">
                                <div className="flex items-center md:gap-6 gap-2 w-full h-full">
                                    <div>
                                        <i className="fas fa-warning md:text-4xl text-xl text-slate-700"/>
                                    </div>
                                    <div>
                                        <p>Deprecated Tools</p>
                                        <h1 className="font-bold md:text-5xl text-2xl">{Number(68).toLocaleString()}</h1>
                                    </div>
                                </div>

                            </Card>
                            <Card classes="w-5/12 shadow-md h-4/6 mt-3 rounded-md bg-white py-2 md:px-8 px-4 text-sm">
                                <div className="flex items-center md:gap-6 gap-2 w-full h-full">
                                    <div>
                                        <i className="fas fa-book md:text-4xl text-xl text-slate-700"/>
                                    </div>
                                    <div>
                                        <p>Tools with Outdated Docs</p>
                                        <h1 className="font-bold md:text-5xl text-2xl">{Number(12).toLocaleString()}</h1>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Card>
                    <Card classes="w-full h-48 rounded-lg bg-slate-100 shadow-md px-4 py-3">
                        <h2 className="md:text-xl text-lg">Tools Record Statistics</h2>
                        <div className="flex justify-around w-full h-full">
                            <Card classes="w-full shadow-md h-4/6 mt-3 rounded-md bg-white py-2 md:px-8 px-4 text-sm">
                                <div className="flex items-center md:gap-6 gap-2 w-full h-full">
                                    <div>
                                        <i className="fas fa-percent md:text-4xl text-xl text-slate-700"/>
                                    </div>
                                    <div className="gap-2 flex flex-col">
                                        <p>percentage of outdated tools / total number of tools</p>
                                        <h1 className="font-bold md:text-5xl text-2xl">{Number(3).toLocaleString()}%</h1>
                                    </div>
                                </div>

                            </Card>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Dashboard;