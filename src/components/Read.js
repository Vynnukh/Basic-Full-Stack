

export const Read = ({loggedIn, setLoggedIn}) => {


    return (
        <div>{loggedIn ?
        <h1>This will handle the read users function</h1>:
        <h2>You can only view other memebrs when you are logged in.</h2>}
        </div>
    )
}