import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getEmpsAppraisal } from '../../../actions/Actions'

import Table from '../../Table/Table'

const OrgCategories = () => {
    const dispatch = useDispatch();
    const { empsAppraisal } = useSelector(state => ({
        empsAppraisal: state.posts.empsAppraisal,
    }));

    const [data, setData] = useState([])
    const columns = [{column_name: "CAT_ID", curser: "CAT_ID" ,key: "1", index: "1"},{column_name: "CAT_NAME", curser: "CAT_NAME" ,key: "2", index: "2"}]
    useEffect(() => {
        dispatch(getEmpsAppraisal(setData))
    }, [])


    return (
        <Table columns={columns} data={data} />

    )
}

export default OrgCategories