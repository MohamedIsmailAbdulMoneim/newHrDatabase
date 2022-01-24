import React from 'react';
import Cell from './Cell'

const Row = ({ columns, data }) => {
    return (
        data.map(cell => (
            <tr key={Math.random(1)}>
                {columns.map(column => (
                    <Cell key={`${cell}_${column.index}`} data={cell[`${column.curser}`]} />
                ))}
            </tr>

        ))
    )

}


export default Row;