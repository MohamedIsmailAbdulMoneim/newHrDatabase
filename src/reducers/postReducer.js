import {
  fetchCates, fetchEmpNameByName, fetchEmptransForUpdate, fetchEmpsTransactions
  } from "../actions/ActionTypes";
  
  const initialState = {
    empsAppraisal: [],
    names: [],
    name: '',
    transactions: [],
    dataForTransUpdate: []
  };
  
  export default function post (state = initialState, action) {
    switch (action.type) {

      case fetchCates:
        return {
          ...state,
          cates: action.payload

        }
      case fetchEmpNameByName:
        return {
          ...state,
          names: action.payload.names,
          name : action.payload.name

        }
      case fetchEmptransForUpdate:
        return {
          ...state,
          dataForTransUpdate: action.payload.data
        }
      case fetchEmpsTransactions:
        return {
          ...state,
          transactions: action.payload
        }
  
      default:
        return state;
    }
  }