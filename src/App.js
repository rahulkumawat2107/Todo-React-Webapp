import './App.css';
import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterValue, setfilterValue] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //console.log("Filer", filterValue);

  useEffect(() => {
      filterHandler();
      console.log(filteredTodos);
  }, [todos, filterValue]);

  const filterHandler = () => {
    console.log("Filer", filterValue);
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

  return (
    <div className="app">
      <div className="app_body">
        <h1>Todo App</h1>
          <Todo todos = {todos} inputText={inputText} setInputText = {setInputText} setTodos = {setTodos} setfilterValue = {setfilterValue}/>
          <ul>  
            {filteredTodos.map((todo) => (
                <TodoList key={todo.id} text={todo.text} todo = {todo} todos = {todos} setTodos={setTodos} completed={todo.completed}/>
            ))}  
          </ul>
      </div>
    </div>
  );
}

export default App;
