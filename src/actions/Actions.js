import {
  fetchCates, fetchEmpsTransactions, fetchEmpNameByName, fetchEmptransForUpdate
} from "../actions/ActionTypes";
import axios from "axios";

export const getCates = (state) => (dispatch) => {
  axios.get(`http://${process.env.REACT_APP_URL}/category`).then(({ data }) => {
    state((prevState) => [...data, ...prevState])
    dispatch({
      type: fetchCates,
      payload: data
    })
  })
}

export const getTransactions = () => (dispatch) => {
  axios.get(`http://${process.env.REACT_APP_URL}/getemptrans`).then(({ data }) => {
    dispatch({
      type: fetchEmpsTransactions,
      payload: data
    })
  })
}

export const getEmpNameByName = (val, name) => (dispatch, getState) => {
  axios.get(`http://${process.env.REACT_APP_URL}/empnamebyName/?empname=${val}`).then(res => {
    const names = res.data.map(name => name.NAME_ARABIC)
    console.log(names);

    dispatch({
      type: fetchEmpNameByName,
      payload: { names, name: name }
    })
  })
}

export const getEmptransForUpdate = () => (dispatch) => {
  axios.get(`http://${process.env.REACT_APP_URL}/getStructRep`).then(({ data }) => {
    
    dispatch({
      type: fetchEmptransForUpdate,
      payload: { data }
    })
  })
}