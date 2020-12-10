import React from 'react'
import './Todo.css'

function Todo({inputText, setInputText, todos, setTodos, setfilterValue}) {

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

    const optionHandle = (e) => {
        setfilterValue(e.target.value);
    }

    return (
        <div className="todo_container">
            <form onSubmit={submitTodo}>
                <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Enter task here"></input>
                <button type="submit">Submit</button>
            </form>
            <select onChange={optionHandle}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    )
}

export default Todo;
