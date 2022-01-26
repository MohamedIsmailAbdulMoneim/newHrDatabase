import React, { useState } from 'react';
import Cell from './Cell'

const Row = ({ columns, data, firstArg, secondArg }) => {
    const [active, setActive] = useState(false)
    const handleClick = (e) => {
        console.log(e.key)
        e.target.parentElement.className === '' ? e.target.parentElement.classList.add('table-active') : e.target.parentElement.classList.remove('table-active')
        setActive(!active)
    }
    return (
        data.slice(firstArg,secondArg).map(cell => (
            <tr onClick={handleClick} >
                {columns.map(column => (
                    <Cell key={`${cell}_${column.index}`} data={cell[`${column.curser}`]} />
                ))}
            </tr>
        ))
    )
}


export default Row;