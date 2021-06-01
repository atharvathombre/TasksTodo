import React from 'react';
import { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Need title and description of Todo");
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container">
            <h3 className="mt-5">Add your Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="todoTitle" autoComplete="off"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="todoDesc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="todoDesc" autoComplete="off"/>
                </div>
                <button type="submit" className="btn btn-sm btn-outline-primary">Add Todo</button>
            </form>
        </div>
    )
}
