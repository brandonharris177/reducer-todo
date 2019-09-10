import React from 'react'

const TodoForm = () => {
    return (
        <form>
            <input 
                name = "toDoImput" 
                type = "text" 
                placeholder = "To Do:"/>
            <button type = "submit">Submit</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm