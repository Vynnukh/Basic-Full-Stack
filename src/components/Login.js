import { useState } from "react";
import { login } from "../utils";

export const Login = ({setUser, setLoggedIn}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = async (event) => {
        event.preventDefault()
        await login(email, password, setUser, setLoggedIn)
    }

    return (
        <form onSubmit={loginHandler}>
            <h1>Login</h1>
            <br></br>
            <label>Email Acc:
            <input type="email" onChange={(event) => setEmail(event.target.value)}/>
            </label>
            <br></br>
            <label>Password:
            <input onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <br></br>
            <br></br>
            <button type="submit">Login</button>

        </form>
    )
}