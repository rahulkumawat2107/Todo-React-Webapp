import React from 'react'

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
            <input type="checkbox" checked = {completed} onChange={completeHandle}></input>
            <li style={{ textDecoration:` ${todo.completed ? 'line-through' : ''} `}} type="text">{text}</li>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default TodoList
