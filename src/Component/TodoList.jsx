import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TodoList() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");

    const handleApi = async () => {
        const res = await axios.get("http://localhost:3000/todoList");
        setData(res.data);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleAdd = async () => {
        if (input.trim() === "") {
            alert("Please enter a task");
            return;
        }

        const body = {
            task: input
        };

        await axios.post("http://localhost:3000/todoList", body);

        setInput("");
        handleApi();
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Delete this task?"
        );

        if (!confirmDelete) return;

        await axios.delete(
            `http://localhost:3000/todoList/${id}`
        );

        handleApi();
    };

    const handleEdit = async (todo) => {
        const updatedTask = prompt(
            "Edit Task",
            todo.task
        );

        if (
            !updatedTask ||
            updatedTask.trim() === ""
        ) {
            return;
        }

        await axios.put(
            `http://localhost:3000/todoList/${todo.id}`,
            {
                id: todo.id,
                task: updatedTask
            }
        );

        handleApi();
    };

    useEffect(() => {
        handleApi();
    }, []);

    return (
        <div className="container">
            <h1>TODO LIST</h1>
            <div className="input-container">
                <input
                    value={input}
                    onChange={handleChange}
                    placeholder="Enter your task..."
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAdd();
                        }
                    }}
                />
                <button onClick={handleAdd}> Add </button>
            </div>
            <h3>Total Tasks: {data.length}</h3>
            {data.map((todo, index) => (
                <div className="list" key={todo.id}>
                    <h2>{index + 1}. {todo.task} </h2>
                    <div>
                        <button onClick={() =>handleEdit(todo)}>Edit</button>
                        <button onClick={() =>handleDelete(todo.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}