import React from 'react'

const ToDoList = (props) => {
    console.log(props.propsPassedToToDoList)
    return (
        <>
        {props.propsPassedToToDoList.map(todoItem => 
            <div key = {todoItem.id}>{todoItem.item}</div>)}
        </>
    );
};

export default ToDoList