import './App.css';
import Header from "./MyComponents/Header"; // dont include brackets, brackets are used when named export, we can catch value using that
// but here this is default export
import {Todos} from "./MyComponents/Todos"; // named export becos of arrow function export
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, { useState } from 'react';
import { useEffect } from 'react';
import {About} from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem('todos') === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const [todos, setTodos] = useState (initTodo);
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // this way of deleting will not work in react, becos things will not get updated in realtime, however the items
    // will be removed from the todos, it will just not show in realtime, to do this, we have to use states
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // console.log(todos);

    // setTodo sets the value of todos list
    setTodos(todos.filter((e) => { // higher order array function
      return e !== todo; // it returns all those values which are not equal to todo
    }));

    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const addTodo = (itemTitle, itemDesc) => {
    let temp = {
      sno : todos.length + 1,
      title : itemTitle,
      desc : itemDesc
    };
    setTodos([...todos, temp]);
  };


  //  this useEffect will run whenevr someone changes in todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
    
    <Router>
      <Header title="My Todos List" searchBar={false}/>
      <Switch>
        <Route exact path="/" render={() =>  {
          return (
            <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>
          )
        }}>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
