import './App.css';
import React, {useState} from 'react';
import Todo from './Todo';
import TodoList from './TodoList';

function App() {
  const[inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  console.log(todos)

  return (
    <div className="app">
      <div className="app_body">
        <h1>Todo App</h1>
          <Todo todos = {todos} inputText={inputText} setInputText = {setInputText} setTodos = {setTodos}/>
          <ul>  
            {todos.map((todo) => (
                <TodoList key={todo.id} text={todo.text} todo = {todo} todos = {todos} setTodos={setTodos} completed={todo.completed}/>
            ))}  
          </ul>
      </div>
    </div>
  );
}

export default App;
