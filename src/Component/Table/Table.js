import React from 'react';
import { column } from 'stylis';

import Column from './Column/Column'
import Row from './Row/Row'



function Table({ columns, data }) {

    return (
        <table className='table'>
            <thead>
                <tr>
                    {columns.map(column => (
                        <Column key={column.key} data={column.column_name} />
                    ))}
                </tr>
            </thead>
            <tbody>
                <Row columns={columns} data={data} />
            </tbody>
        </table>
    )
}


export default Table;