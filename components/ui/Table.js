import React from 'react';

const Table = () => {
    return (
        <table className="border-collapse table-auto w-full h-full text-sm">
            <thead>
            <tr>
                <th className="border-b border-slate-600 font-medium text-lg p-4 pl-8 pt-0 pb-3 text-gray-600 text-left">No.</th>
                <th className="border-b border-slate-600 font-medium text-lg p-4 pt-0 pb-3 text-gray-600 text-left">User</th>
                <th className="border-b border-slate-600 font-medium text-lg p-4 pr-8 pt-0 pb-3 text-gray-600 text-left">Edits</th>
            </tr>
            </thead>
            <tbody className="bg-slate-800">
            <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-300">
                    1
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-300">Malcolm
                    Lockyer
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-300">1961</td>
            </tr>
            <tr>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-300">
                    2
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-300">The
                    Eagles
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-300">1972</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-300">
                    3
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-300">
                    Wind
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-300">1975</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-300">
                    4
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-300">Earth
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-300">1809</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-300">
                    5
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-300">
                    Air24
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-300">270</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-300">
                    6
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-300">
                    rift33
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-300">424</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-300">
                    7
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-300">
                    giddy
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-300">983</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-300">
                    8
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-300">
                    bandito
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-300">878</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-300">
                    9
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-300">
                    joker
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-300">139</td>
            </tr>
            <tr>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-300">
                    10
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-300">
                    21pilots
                </td>
                <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-300">444</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table;