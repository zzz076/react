import React from "react";
import Todo from './todo'
export default function TodoList(props){
    return(
        <div className="todolist">
            <ul>
                {
                    props.filterTodos.map((todo)=>{
                        return <Todo 
                        completed={todo.completed}
                        inputText={todo.text}
                        id={todo.id}
                        key={todo.id}
                        setTodos={props.setTodos}
                        todos={props.todos}
                        />
                })
                }
            </ul>
        </div>
    )
}