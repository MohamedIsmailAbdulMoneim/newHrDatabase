import React, { useState, useRef } from 'react'
import ContentEditable from "react-contenteditable";

const Input = ({ data, update, name }) => {

    const nameRef = useRef()
    const [value, setValue] = useState({ value: data, update: false });
    //     setValue({ value: e.target.value, update: false });
    //     update({ value: e.target.value, name: nameRef.current.props.name })
    // }

    return (
        <ContentEditable
            html={(value.value && value.value.toString()) || ""}
            onChange={(e) => {update({ value: e.target.value, name: name }); setValue({value: e.target.value, update: true})}}
            onBlur={() => setValue((old) => ({ value: old.value, update: true }))}
            name={name}
            value={value}
            style={{ marginRight: 2 }}
            ref={nameRef}
        />
    )
}

export default Input