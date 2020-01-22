import React from 'react'

const ToDoList = ({ propsPassedToToDoList, toggleToDo }) => {
    // console.log(propsPassedToToDoList)
    // console.log(toggleToDo)

    return (
        <>
        {propsPassedToToDoList.map(todoItem => 
            <div 
            key = {todoItem.id} 
            onClick = {() => toggleToDo(todoItem.id)} 
            className ={todoItem.completed ? "completed" : "" }>{todoItem.item}</div>)}
        </>
    );
};

export default ToDoList

