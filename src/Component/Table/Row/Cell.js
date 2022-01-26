import React, { useState } from 'react';
import ContentEditable from "react-contenteditable";

const Cell = ({ data }) => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <td>
            <ContentEditable
                html={(data && data.toString()) || ""}
                onChange={handleChange}
                onBlur={() => setValue((old) => old)}
            />
        </td>

    )
}

export default Cell;