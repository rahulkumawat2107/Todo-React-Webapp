import './App.css';
import './TodoList.css'
import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import Todo from './Todo';
import TodoList from './TodoList';
import Filter from './Filter.js';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterValue, setfilterValue] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [showAddItem, setshowAddItem] = useState(false);

  console.log("add",showAddItem);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
      filterHandler();
      saveLocalTodos();
  }, [todos, filterValue]);

  const filterHandler = () => {
    switch(filterValue) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem(todos, JSON.stringify([]));
    }else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="app">
      <div className="app_body">
        <h1>Todo App</h1>
          <Filter filterValue = {filterValue} setfilterValue = {setfilterValue}/>
          <div className="todoContainer">
            <ul>  
              {filteredTodos.map((todo) => (
                  <TodoList key={todo.id} text={todo.text} todo = {todo} todos = {todos} setTodos={setTodos} completed={todo.completed}/>
              ))}  
            </ul>
          </div>
          { showAddItem && <Todo todos = {todos} inputText={inputText} setInputText = {setInputText} setTodos = {setTodos} filterValue = {filterValue} setfilterValue = {setfilterValue} setshowAddItem={setshowAddItem}/>}
          <Button onClick={() => setshowAddItem(!showAddItem)}>{`${!showAddItem ? "+ Add Item" : "Cancel"}`}</Button>
      </div>
    </div>
  );
}

export default App;
