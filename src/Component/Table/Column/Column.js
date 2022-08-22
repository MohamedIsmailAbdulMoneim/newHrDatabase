import React, { useState } from 'react';
import styled from 'styled-components';

import List from '../../FixedSList'

const Div = styled.div`
position:absolute;
top : 100%;
right:0%;
height: auto;
overflow: auto;
width: "100%"


`

const Column = ({ column, data }) => {

    const filterItems = data.map(item => item[`${column.curser}`])

    const filteredItems = [...new Set(filterItems)]

    const [visible, setVisible] = useState(false)

    return (
        <>
            <td style={{ position: 'relative' }}  >
                {column.column_name ?
                    <>
                        {column.column_name}
                        < svg onClick={() => setVisible(!visible)} style={{ marginRight: 15 }} width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="14" y2="12"></line>
                            <line x1="4" y1="18" x2="18" y2="18"></line>
                        </svg>
                        <Div style={visible ? { display: 'inline' } : { display: 'none' }}>
                            <List items={filteredItems} curser={column.curser} />
                        </Div>
                    </>
                    :
                    column.col_edit ?
                        'تعديل'

                        :
                        'حذف'
                }


            </td>
        </>

    )
}

export default Column;