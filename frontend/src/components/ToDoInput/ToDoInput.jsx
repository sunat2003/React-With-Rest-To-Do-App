import { useState } from 'react';
import './ToDoInput.css';
import axios from 'axios';
import {useFormik} from 'formik'; 

export function ToDoInput(){
    const [inputTask,setInputTask]=useState({})
    const formik=useFormik({
        initialValues:{
             task:""
        },
        onSubmit:(value)=>{
            axios.post('http://127.0.0.1:8000/api/', value);
            window.location.reload();
       }

    })
    return(
        <div className="to-do-list">
            <form on onSubmit={formik.handleSubmit} className='todo-form'>
            <p>{inputTask.task}</p>
            <input type="text" name='task' onChange={formik.handleChange} className="todo-form-input" />
            <button type="submit" className="add-task-btn">Add Task</button>
            </form>
        </div>
    )
}