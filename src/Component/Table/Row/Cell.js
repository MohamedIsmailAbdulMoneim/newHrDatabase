import React, { useState, useRef } from 'react';

import styles from './Cell.module.css'

const Cell = ({ data, name, criteria, update, column, cell, handleClick, curRow, elId, }) => {

    const { select: Select } = column

    return (
        column.curser ?
            parseInt(elId) === parseInt(curRow) ?
                <td onFocus={(e) => e.target.classList.add(`${styles.td}`)}>
                    <Select criteria={criteria} data={data} update={update} name={name} column={column} />
                </td>
                :
                <>
                    <td>{cell[`${column.curser}`]}</td>
                </>
            :
            column.col_edit ?
                <td><i onClick={handleClick} elId={elId} className="fas fa-user-edit"></i></td>
                :
                <td><i className="fas fa-trash-alt"></i></td>
    )
}

export default Cell;


