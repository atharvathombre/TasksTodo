import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className = "container">
            <h3 className="text-center">Todos List</h3>
            {props.todos.length === 0 ? <h3>No Todos to Display</h3> : 
                 props.todos.map((argu) => {
                    console.log(argu);
                    return (
                        <TodoItem todo = {argu} key={argu.sno} onDelete={props.onDelete}/>
                    )
                })
            }
        </div>
    )
}

/* if you want to use multiple statements inside return and it throws an error just wrap that
 whole thing into empty opening and closing <>, </> brackets, for example : 
 return (
        <>
        <h3>I want to insert this h3</h3> 
        <TodoItem todo = {argu}/>
        </>
    )
*/