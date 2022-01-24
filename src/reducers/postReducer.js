import {
  fetchEmpsAppraisals
  } from "../actions/ActionTypes";
  
  const initialState = {
    empsAppraisal: [],
  };
  
  export default function post (state = initialState, action) {
    switch (action.type) {

      case fetchEmpsAppraisals:
        return {
          ...state,
          empsAppraisal: action.payload

        }
  
      default:
        return state;
    }
  }