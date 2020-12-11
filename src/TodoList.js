import React from 'react'
import './TodoList.css';
import {Checkbox} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function TodoList({text, todo, todos, setTodos, completed}) {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        console.log(todo)
    }

    const completeHandle = () =>{
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div>
            <div className="todoItem">
                <Checkbox checked={completed} onChange={completeHandle} />
                <li onClick={completeHandle} style={{ color:` ${todo.completed ? '#696969' : ''} `, textDecoration:` ${todo.completed ? 'line-through' : ''} `}} type="text">{text}</li>
                <DeleteForeverIcon onClick={deleteHandler}></DeleteForeverIcon>
            </div>
        </div>
    )
}

export default TodoList
