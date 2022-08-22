import React, { useEffect, useState } from 'react';
import Cell from './Cell'

const Row = ({ columns, data, firstArg, secondArg, update, select, criteria }) => {
    const [curRow, setCurRow] = useState(null)

    const escFunc = (e) => {
        if(e.keyCode === 27){
            setCurRow(null)
        }
    }
    
    const handleClick = (e) => {
        setCurRow(e.target.getAttribute('elId'))
        // active ? setCurRow(e.target.getAttribute('elId')) : setCurRow(null)
    }

    useEffect(() => {
        document.addEventListener("keydown", escFunc, false)
    }, [])
    return (
        <>
        {data.slice(firstArg,secondArg).map(cell => (
            <tr key={`${cell[columns[0].idKey]}`} className={parseInt(cell[`${columns[0].id}`]) === parseInt(curRow) ? 'table-active' : ''} >
                {columns.map(column => (
                    <Cell select={select} criteria={criteria} elId={cell[columns[0].idKey]} name={column.curser} key={`${cell[columns[0].idKey]}_${column.index}`} data={cell[`${column.curser}`]} update={update} cell={cell} column={column} curRow={curRow} handleClick={handleClick}  />
                ))}
                {/* <td><i className="fa-solid fa-file-xmark"></i></td>
                <td><i className="fa-solid fa-file-pen"></i></td> */}
            </tr>
        ))}
        
        </>
    )
}


export default Row;