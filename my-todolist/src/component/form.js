import React from "react";


export default function TodoList (props){

    const submitHandler = (e) =>{
        e.preventDefault()
        props.setTodos([
            ...props.todos,
            {text:props.inputText,
             completed:false,
             id:Math.random()*10000}
        ])
        props.setInputText('')
     
    }

    const inputTextHandler =(e)=>{
        props.setInputText(e.target.value)
    }

    const statusHandler =(e)=>{
        props.setStatus(e.target.value)
    }
    

    return(
        <form>
            <div className="inputText">
                <input value={props.inputText} onChange={inputTextHandler} type="text" className="input-content"/>
                <button onClick={submitHandler} type="submit" className="input-btn"><i className="fa-solid fa-square-plus"></i></button>
            </div>
            <div className="select-bar">
                <select onChange={statusHandler} className="selects">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}