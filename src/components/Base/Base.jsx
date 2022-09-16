import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { exp } from '../../redux/task.actions';

const Base = (props) => {
  const {
    tasks,
    loading,
    error,
    errorMsg,
    taskName,
    deleteTaskName,
    editTask,
    exps
  } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  const setData = ()=>{
    dispatch(exp('expsexpsexpsexpsexpsexpsexpsexpsexpsexpsexpsexpsexpsexpsexps'));

  }
  return(
  <div className="BaseWrapper">
    Test content
    <div>
      
    {exps}
    </div>
{taskName} - {errorMsg} 
<div onClick={()=>{setData()}}>
setData
</div>
  </div>
)};

export default Base;
