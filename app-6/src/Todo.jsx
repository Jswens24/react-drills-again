import React from 'react'

const Todo = ({ taskList }) => {
    return (
        <div>
            {taskList.map((el, index) => {
                return <h4 key={index}>{el}</h4>
            })}
        </div>
    )
}

export default Todo