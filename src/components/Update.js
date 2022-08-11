import { useState } from "react";
import { update } from "../utils";

const Update = ({setUser}) => {
    const [username, setUsername] = useState()
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const updateHandler = async (event) => {
        event.preventDefault()
        await update(username, firstname, lastname, email, password, setUser)
    }

    return (
        <form onSubmit={updateHandler}>
            <label>Username:
                    <input onChange={(event) => setUsername(event.target.value)}/>
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
            <button type = "submit">Update Profile</button>
            </label>
        </form>
    )
}

export default Update
