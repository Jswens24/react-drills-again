import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const clickHandler = () => {
        alert(`Username: ${username} Password: ${password}`)
    }

    return (
        <div>
            <input onChange={e => setUsername(e.target.value)} placeholder='username' />
            <input onChange={e => setPassword(e.target.value)} placeholder='password' />
            <button onClick={clickHandler}>Login</button>
        </div>
    )
}

export default Login