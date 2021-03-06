import React from 'react';
import { Button, Select, Input, MenuItem } from '@material-ui/core';
import './Todo.css';

function Todo({inputText, setInputText, todos, setTodos, filterValue, setfilterValue, setshowAddItem}) {

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
        setshowAddItem(false);
    }

    const optionHandle = (e) => {
        setfilterValue(e.target.value);
    }

    return (
        <div className="todo_container">
            <form onSubmit={submitTodo}>
                <Input value={inputText} onChange={inputTextHandler} type="text" placeholder="Enter todo here"></Input>
                <Button type="submit" disabled = {!inputText}>Submit</Button>
            </form>
            
        </div>
    )
}

export default Todo;
