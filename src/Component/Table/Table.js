import React, { useState } from 'react';

import Column from './Column/Column'
import Row from './Row/Row'
import Pagination from '../Pagination'



function Table({ columns, data }) {
    const pagesLength = Math.ceil(data.length / 10)
    const [page, setPage] = useState(1);
    const firstArg = (page - 1) * 10
    const secondArg = page * 10
    const handleChange = (event, value) => {
        console.log(value);
      setPage(value);
    };

    return (
        <>
        <table className='table table-hover table-sm table-bordered' style={{fontSize: '11pt'}} >
            <thead>
                <tr>
                    {columns.map(column => (
                        <Column key={column.key} colName={column.column_name} data={data} />
                    ))}
                </tr>
            </thead>
            <tbody>
                <Row firstArg={firstArg} secondArg={secondArg} columns={columns} data={data} />
            </tbody>
            
        </table>
        <Pagination  handleChange={handleChange}  pagesLength={pagesLength} />
        </>
    )
}


export default Table;