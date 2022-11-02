import React from 'react';
import TableDefinition from "./TableDefinition";

const Table = () => {
    return (
        <table className="border-collapse table-auto w-full h-full text-sm">
            <thead>
            <tr>
                <th className="border-b border-slate-600 font-medium text-lg p-4 md:pl-8 pt-0 pb-3 text-gray-600 text-left">No.</th>
                <th className="border-b border-slate-600 font-medium text-lg p-4 pt-0 pb-3 text-gray-600 text-left">User</th>
                <th className="border-b border-slate-600 font-medium text-lg p-4 md:pr-8 pt-0 pb-3 text-gray-600 text-left">Edits</th>
            </tr>
            </thead>
            <tbody className="bg-blue-500">
            <tr>
                <TableDefinition>1</TableDefinition>
                <TableDefinition>Malcolm Lockyer</TableDefinition>
                <TableDefinition>1961</TableDefinition>
            </tr>
            <tr>
                <TableDefinition>2</TableDefinition>
                <TableDefinition>The Eagles</TableDefinition>
                <TableDefinition>1972</TableDefinition>
            </tr>
            <tr>
                <TableDefinition>3</TableDefinition>
                <TableDefinition>Wind</TableDefinition>
                <TableDefinition>1975</TableDefinition>
            </tr>
            <tr>
                <TableDefinition>4</TableDefinition>
                <TableDefinition>Earth</TableDefinition>
                <TableDefinition>1809</TableDefinition>
            </tr>
            <tr>
                <TableDefinition>5</TableDefinition>
                <TableDefinition>Air24</TableDefinition>
                <TableDefinition>270</TableDefinition>
            </tr>
            <tr>
                <TableDefinition>6</TableDefinition>
                <TableDefinition>rift33</TableDefinition>
                <TableDefinition>424</TableDefinition>
            </tr>
            <tr>
                <TableDefinition>7</TableDefinition>
                <TableDefinition>giddy</TableDefinition>
                <TableDefinition>983</TableDefinition>
            </tr>
            <tr>
                <TableDefinition>8</TableDefinition>
                <TableDefinition>bandito</TableDefinition>
                <TableDefinition>878</TableDefinition>
            </tr>
            <tr>
                <TableDefinition>9</TableDefinition>
                <TableDefinition>joker</TableDefinition>
                <TableDefinition>139</TableDefinition>
            </tr>
            <tr>
                <TableDefinition>10</TableDefinition>
                <TableDefinition>21pilots</TableDefinition>
                <TableDefinition>444</TableDefinition>
            </tr>
            </tbody>
        </table>
    );
};

export default Table;