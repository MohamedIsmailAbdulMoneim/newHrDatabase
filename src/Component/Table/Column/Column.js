import React, { useState } from 'react';
import { style } from '@mui/system';
import styled from 'styled-components';

import List from '../../List'

const Div = styled.div`
position:absolute;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.12), 0 4px 6px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.12), 0 16px 32px rgba(0, 0, 0, 0.12);
top : 90%;
right:0%;
height: 200px;
overflow: auto;
width: "100%"
background: 'white'

`

const Column = ({ data }) => {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <td style={{ position: 'relative' }}  >
                {data}
                <svg onClick={() => setVisible(!visible)} style={{marginRight: 15}} width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="14" y2="12"></line>
                    <line x1="4" y1="18" x2="18" y2="18"></line>
                </svg>
                <Div style={visible ? { display: 'inline' } : { display: 'none' }}>
                    <List />
                </Div>

            </td>
        </>

    )
}

export default Column;