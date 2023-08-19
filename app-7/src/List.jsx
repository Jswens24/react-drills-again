import React from 'react'
import Todo from './Todo'

export const List = ({ taskList }) => {


    return (
        <div>
            {taskList.map(el => {
                return <Todo task={el} />
            })}
        </div>
    )
}
