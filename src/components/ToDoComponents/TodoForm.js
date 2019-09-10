import React, {useState} from 'react'

const TodoForm = ({addToDoPassedToForm}) => {
    const [toDo, setToDo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addToDoPassedToForm(toDo);
        setToDo("");
    }
    
    const handleChange = (event) => {
        setToDo(event.target.value)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                name = "toDo" 
                type = "text" 
                placeholder = "To Do:"
                value = {toDo}
                onChange = {handleChange}/>
            <button type = "submit">Submit</button>
            {/* <button onClick = {}>Clear Completed</button> */}
        </form>
    )
}

export default TodoForm