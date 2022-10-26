
import './Editore.scss'
import React, { useState, useEffect } from "react";


export default function Todo() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem("localTasks")){
            const storedList = JSON.parse(localStorage.getItem("localTasks"));
            setTasks(storedList);
        }
    },[])


    const addTask = (e) => {
        if (task) {
            const newTask = { id: new Date().getTime().toString(), title: task };
            setTasks([...tasks, newTask]);
            localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
            setTask("");
        }
    };

    const handleDelete = (task)=>{
        const deleted = tasks.filter((t)=>t.id !== task.id);
        setTasks(deleted);
        localStorage.setItem("localTasks", JSON.stringify(deleted))
    }


    return (
        <div className="container row">
            <h1 className="share">Share your idea of beauty</h1>
            <div className="textareaDiv">
                <textarea
                    id="textile-demo"
                    name="task"
                    value={task}
                    placeholder="..."
                    className="textarea1"
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className="col-4">
                <button
                    className="btn-post"
                    onClick={addTask}
                >
                    Post
                </button>
            </div>
            <div className="badge">
            </div>
            {tasks.map((task) => (
                <React.Fragment key={task.id}>
                    <div className='border'>
                    <div className="col-11">
                <span className = "form-control bg-white btn mt-2"
                      style={{textAlign: "center", fontWeight: "bold", maxWidth: '1000px'}}>
                    {task.title}
                </span>
                    </div>
                    <div className="col-1">
                        <button
                            className ="btn-delete"
                            onClick ={()=> handleDelete(task)}
                        >delete</button>
                    </div>
                </div>
                </React.Fragment>
            ))}
        </div>
    );
}











