import React, { useState } from "react";
import "./todolist.css"
function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() != ""){
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }

    function upTask(index) {
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function downTask(index) {
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return (
        <div className="todo-list">
        <h2>Todo-List</h2>
        <div className="box">
            <input 
            type="text" 
            placeholder="Enter a new task..." 
            value={newTask} 
            onChange={handleChange} 
            />
            <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index) => (
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>delete</button>
                <button className="move-button" onClick={() => upTask(index)}>up</button>
                <button className="move-button" onClick={() => downTask(index)}>down</button>
            </li>
            ))}
        </ol>
        </div>
    );
}

export default TodoList;
