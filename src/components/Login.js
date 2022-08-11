import { useState } from "react";
import { login } from "../utils";

export const Login = ({setUser, setLoggedIn}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = async (event) => {
        event.preventDefault()
        await login(username, password, setUser, setLoggedIn)
    }

    return (
        <form onSubmit={loginHandler}>
            <h1>Login</h1>
            <br></br>
            <h2>Username:</h2>
            <input onChange={(event) => setUsername(event.target.value)}/>
            <br></br>
            <h2>Password:</h2>
            <input onChange={(event) => setPassword(event.target.value)}/>
            <br></br>
            <br></br>
            <button type="submit">Login</button>

        </form>
    )
}