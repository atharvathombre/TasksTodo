import React from 'react'
// props is a keyword
// if I would have not used props then I would require to put {} in the parameter to access the values
export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-outline-danger" onClick={() => { onDelete(todo); }}>Delete</button>
        </div>
        <hr/>
        </>
    )
}


/* In line no. 9 if we write onClick={oneDelete(todo)}, then upton rendering function will get called but we dont want that
    we want that function to be called whenever user click the delete button, so to do that we have made an arrow function
    that will be passed and inside that onDelete will be called. 
    Note, there is a difference between function pass and function call, 
    like
    for  ex., onDelete is the passing of a function while onDelete() is the calling of the function.
    to avoid calling of onDelete function upon rendering, we secure that function inside an arrow function, so now 
    arrow function is passed when the button is clicked and then onDelete function is called with arguments.
*/