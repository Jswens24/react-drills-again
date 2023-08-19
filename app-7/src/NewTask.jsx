import React from 'react'

const NewTask = ({ setTaskList, userInput, setUserInput }) => {

    const clickHandler = () => {
        setTaskList(currentValue => {
            return [...currentValue, userInput]
        })
    }

    return (
        <div>
            <input onChange={e => setUserInput(e.target.value)} placeholder='Enter a task' />
            <button onClick={clickHandler}>Add</button>
        </div>
    )
}

export default NewTask