import {
  fetchEmpsAppraisals
} from "../actions/ActionTypes";
import axios from "axios";

export const getEmpsAppraisal = (state) => (dispatch) => {
  axios.get(`http://${process.env.REACT_APP_URL}/category`).then(({ data }) => {
    state((prevState) =>  [...data, ...prevState])
    dispatch({
      type: fetchEmpsAppraisals,
      payload: data
    })
  })
}
