import {useState} from "react"
import { signUp } from "../utils"

const SignUp = ({setUser, setLoggedIn}) => {
    const [username, setUsername] = useState()
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signUpHandler = async (event) => {
        event.preventDefault()
        await signUp(username, firstname, lastname, email, password, setUser, setLoggedIn)
    }

    return (
        <form onSubmit={signUpHandler}>
            <label>Username 
                <input onChange = {(event) => setUsername(event.target.value)}/>
            </label>
            <br></br>
            <label>Firstname
                <input onChange = {(event) => setFirstName(event.target.value)}/>
            </label>
            <br></br>
            <label>Lastname
                <input onChange = {(event) => setLastName(event.target.value)}/>
            </label>
            <br></br>
            <label>Email Acc
                <input type="email" onChange = {(event) => setEmail(event.target.value)} />
            </label>
            <br></br>
            <label>Password
                <input onChange = {(event) => setPassword(event.target.value)}/>
            </label>
            <br></br>
            <button type = "submit">Sign Up</button>
        </form>
    )
}

export default SignUp