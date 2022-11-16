import React from "react";

export default function Todo(props){

    const deleteHandler=()=>{
        props.setTodos(
            props.todos.filter(item=> item.id !== props.id)
        )
    }

    const completeHandler =()=>{
        props.setTodos(
            props.todos.map((item=>{
                if(item.id === props.id){
                    return {
                       ...item,
                       completed: !item.completed
                    }
                }else{
                    return item
                }
            }))
        )
    }

    return(
        <div className={`todo ${props.completed ? 'completed' : ''}`}>
            <li>{props.inputText}</li>
            <button onClick={completeHandler} className="complete-btn"><i class="fa-solid fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
    )
}