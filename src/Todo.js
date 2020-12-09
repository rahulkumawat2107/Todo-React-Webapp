import React from 'react'
import './Todo.css'

function Todo({todos, inputText, setInputText, setTodos}) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodo = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed:false, id:Math.random()*1000}
        ])
        setInputText("");
    }

    return (
        <div className="todo_container">
            <form onSubmit={submitTodo}>
                <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Enter task here"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Todo;
