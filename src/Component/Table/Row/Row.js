import React, { useState } from 'react';
import Cell from './Cell'

const Row = ({ columns, data, firstArg, secondArg }) => {
    const [active, setActive] = useState(false)
    const handleClick = (e) => {
        setActive(!active)
    }
    return (
        data.slice(firstArg,secondArg).map(cell => (
            <tr onClick={handleClick} className={active ? 'table-active' : ''} key={Math.random(1)}>
                {columns.map(column => (
                    <Cell key={`${cell}_${column.index}`} data={cell[`${column.curser}`]} />
                ))}
            </tr>

        ))
    )
}


export default Row;