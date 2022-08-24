import React from 'react'

function removeDups(obj) {
  return obj.reduce((acc, current) => {
    const x = acc.find(item => item.name === current.name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, [])
}

const Select = ({ criteria, update, name, data, column }) => {
  const filteredArr = removeDups(column.updateOption)
  const finalData = filteredArr
  return (
    <select  onChange={(e) => update({ value: e.target.value, name: name, id: e.target.options[e.target.options.selectedIndex].id })
    } required style={{ fontSize: "10pt", marginTop: 5, marginRight: 6, height: 25, width: 120 }}>
      <option value="none">
        اختر
      </option>
      {finalData?.map(el => (
        <option id={el.id}>{el.name}</option>
      ))}
    </select>
  )
}

export default Select