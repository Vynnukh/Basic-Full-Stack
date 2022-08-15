import { deleteUser } from "../utils"

export const Delete = ({username, loggedIn, setLoggedIn}) => {

    const DeleteHandler = async (event) => {
        try {
            event.preventDefault()
            await deleteUser(username, setLoggedIn)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
           {loggedIn ?
           <div> <h1>Please confirm your username and password to delete your account</h1>
           <br></br>
           <form type="submit" onSubmit={DeleteHandler}>
            <label>Username:
                <input />
                
            </label>
            <br></br>
                <label>Passowrd:
                    <input />
                </label>
                <br></br>
           <button >Delete Account</button>
           </form>
            </div>:
           <h2>You must be logged in to delete your account.</h2>
           }
        </div>
    )
}