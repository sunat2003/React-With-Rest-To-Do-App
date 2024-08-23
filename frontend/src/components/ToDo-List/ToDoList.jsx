import axios from 'axios';
import { useEffect, useState } from 'react';
import './ToDoList.css';
import { RxCross1 } from "react-icons/rx";

export function ToDoList() {

    const [list, setList] = useState([])
    const [pstyle,setpstyle]=useState({textDecoration:"none"})
    
    function handleChange(e){
        if(e.target.checked===true ){
            setpstyle(
                {
                    textDecoration:"line-through"
                }
            )
        }
        else{
            setpstyle(
                {
                    textDecoration:"none"
                }
            )
        }
    }
    function handleDeleteClick(id) {
        axios.delete(`http://127.0.0.1:8000/api/${id}/`);
        window.location.reload();
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/').then((res) => {
            setList(res.data);
        })
    }, [])
    return (
        <div className="to-do-list">
            {
                <ul className="to-list-ul">
                    {
                        list.map(data =>
                            <li key={data.id} className="todo-li"><div className="todo-contenet"> <input type="checkbox" name={data.id} onChange={handleChange} /> <p style={pstyle}>{data.task}</p></div> <button onClick={() => { handleDeleteClick(data.id) }} className="todo-task-delete"><RxCross1 /></button></li>
                        )
                    }
                </ul>
            }
        </div>
    )
}