import { logout } from "../utils"


export const Logout = ({loggedIn, setLoggedIn, token}) => {

const logoutHandler = async (event) => {
    try {
    event.preventDefault()
    await logout(token, setLoggedIn)
} catch(error) {
    console.log(error)
}
}

    return (
        <div>{loggedIn ? <div>
            <h1>Are you sure you want to log out?</h1>
            <br></br>
            <button onClick = {logoutHandler}>Log Out</button>
            </div>
            :
            <h2>Logged Out</h2>}
        </div>
    )
}