import React, { useState } from 'react';

import Column from './Column/Column'
import Row from './Row/Row'
import Pagination from '../Pagination'



function Table({ columns, data, update, select, criteria }) {
    const pagesLength = Math.ceil(data.length / 10)
    const [page, setPage] = useState(1);
    const firstArg = (page - 1) * 10
    const secondArg = page * 10
    const handleChange = (event, value) => {
        setPage(value);
    };


    return (
        <>
            <table className='table table-hover table-sm table-bordered' style={{ fontSize: '11pt' }} >
                <thead>
                    <tr>
                        {columns.map(column => (
                            <Column key={column.key} column={column} colName={column.column_name} data={data} colEdit={column.col_edit} colDelete={column.col_delete} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <Row select={select} criteria={criteria} update={update} firstArg={firstArg} secondArg={secondArg} columns={columns} data={data} />
                </tbody>


            </table>

            <Pagination handleChange={handleChange} pagesLength={pagesLength} />
        </>
    )
}


export default Table;