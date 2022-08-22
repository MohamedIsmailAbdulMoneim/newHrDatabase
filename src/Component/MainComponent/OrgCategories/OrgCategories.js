import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCates } from '../../../actions/Actions'

import Table from '../../Table/Table'

const OrgCategories = () => {
    const dispatch = useDispatch();
    const { cates } = useSelector(state => ({
        cates: state.posts.empsAppraisal,
    }));

    const [data, setData] = useState([])
    const [updatedData, setUpdatedData] = useState({CAT_NAME: '', CAT_ID: ''})
    const columns = [{ column_name: "الإدارة", curser: "CAT_NAME", key: "2", index: "2", id:"CAT_ID"}, { column_name: "كود الإدارة", curser: "CAT_ID", key: "1", index: "1", id:"CAT_ID" }, { col_edit: 'تعديل', id:"CAT_ID", index: '3', key: '3' }, { col_delete: 'حذف', id:"CAT_ID", index: '4', key: '4' }]
    useEffect(() => {
        dispatch(getCates(setData))
    }, [])

    const updateCat = (data) => {
       setUpdatedData(old => {return  {...old, [data.name] : data.value}})
       console.log(updatedData);
    }

    return (
        <Table columns={columns} data={data} updateCat={updateCat} />

    )
}

export default OrgCategories