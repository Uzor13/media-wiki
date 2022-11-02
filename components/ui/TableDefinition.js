import React from 'react';

const TableDefinition = ({children}) => {
    return (
        <td className="border-b border-slate-200 dark:border-blue-300 p-4 text-lg pr-8 text-white">
            {children}
        </td>
    );
};

export default TableDefinition;