import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles, createStyles } from '@mui/styles';
import { getEmpNameByName } from '../actions/Actions'
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: 10,
      
      color: 'black',
      "&.Mui-focused": {
        border: "2px solid black",
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none'
        }
      }
    }
  })
);

export default function ComboBox(props) {

  const dispatch = useDispatch()
  const classes = useStyles();
  const { posts } = useSelector(state => ({
    ...state,
    names: state.posts.names,
  }))

  

  const { names } = posts


  const changeHandler = (e, value) => {
    dispatch(getEmpNameByName(e.target.value,value))
    
  }

  return (
    <Autocomplete
      id="combo-box-demo"
      options={names}
      sx={{ width: 300 }}
      classes={{option: classes.root, input: classes.root}}
      onChange={changeHandler}
      InputProps={{
        classes: { input: classes.root }
      }}
      renderInput={(params) => <TextField
        {...params}
        label="الإسم"
        InputProps={{
          ...params.InputProps,
          type: 'search',
          classes: { input: classes.root }
        }}
        onChange={changeHandler}
      />}
    />
  );
}