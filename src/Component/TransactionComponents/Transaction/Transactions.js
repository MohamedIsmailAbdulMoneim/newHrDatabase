import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTransactions, getEmptransForUpdate } from '../../../actions/Actions'

import Table from '../../Table/Table'
import { sortedData, transformData } from '../lib/methods';
import { getColumns } from '../data/data'
import BasicCard from '../../Card';

const Transactions = () => {
    const dispatch = useDispatch();
    const { posts: { name, transactions, dataForTransUpdate } } = useSelector(state => ({ ...state, names: state.posts.names }))
    const [data, setData] = useState([])
    const [supBox, jobAsForm, indecator] = dataForTransUpdate
    const [criteria, setCriteria] = useState({
        SUP_BOX_NAME: '',
        MAIN_BOX_NAME: '',
        catname: ''
    })
    const [updatedData, setUpdatedData] = useState([])

    useEffect(() => {
        dispatch(getTransactions())
        dispatch(getEmptransForUpdate())
        const filterdData = transactions.filter(x => x.NAME_ARABIC === name && name !== null)
        setData(old => [...filterdData])
    }, [name, JSON.stringify(transactions), JSON.stringify(supBox)])

    const updateTransaction = (data) => {
        console.log(data);
        setCriteria(old => ({
            ...old,
            [data.name]: [data.id][0]
        })
        )
    }

    return (
        <>
            {data.length === 0 && <BasicCard content={'عفواً لا توجد بيانات'} />}
            {data.length > 0 && <Table criteria={criteria} columns={getColumns({ criteria ,supBox, jobAsForm, indecator })} data={sortedData(name, data)} update={updateTransaction} />}
        </>
    )
}

export default Transactions